import { Attributes, Node } from './types.js';
import * as ts from 'typescript';
import { isExpressionStatement } from 'typescript';

export interface Renderable {
  render(): string;
}

export class Raw implements Renderable {
  constructor(private readonly value: string) {}

  render = () => this.value;
  toString = () => `Raw[${this.render()}]`;
}

export class Element implements Renderable {
  constructor(
    readonly tagName: string | null,
    private readonly attributes: Attributes | null,
    private readonly children: Node[],
  ) {}

  render(): string {
    if (this.tagName === null) {
      return renderChildren(this.children);
    }
    if (isVoidElement(this.tagName)) {
      return `<${this.tagName}${createAttributes(this.attributes)}>`;
    }
    return `<${this.tagName}${createAttributes(this.attributes)}>${renderChildren(this.children)}</${this.tagName}>`;
  }

  toString = () => this.render();
}

export function isRenderable(o: any): o is Renderable {
  return o && typeof o.render === 'function' && o.render.length === 0;
}

export function raw(html: string): Raw {
  return new Raw(html);
}

function transpile(fn: Function, compilerOptions = {}) {
  const source = ts.createSourceFile('snippet.ts', fn.toString(), ts.ScriptTarget.Latest);

  if (source.statements.length !== 1) {
    throw new Error(`Invalid argument, expected a single statement but got ${fn.toString()}`);
  }

  const statement = source.statements[0];

  let body: ts.Block | ts.ConciseBody;
  if (ts.isFunctionDeclaration(statement) && statement.body) {
    body = statement.body;
  } else if (
    isExpressionStatement(statement) &&
    (ts.isArrowFunction(statement.expression) || ts.isFunctionExpression(statement.expression))
  ) {
    body = statement.expression.body;
  } else {
    throw new Error(`Invalid argument, expected a function but got ${fn.toString()}`);
  }

  const bodyText = ts.isBlock(body)
    ? fn.toString().substring(body.statements.pos, body.statements.end)
    : fn.toString().substring(body.pos, body.end);

  const result = ts.transpileModule(bodyText, {
    compilerOptions: {
      target: ts.ScriptTarget.ES2020,
      lib: ['dom', 'dom.iterable'],
      ...compilerOptions,
    },
  });

  return result.outputText;
}

export function transpileScript(fn: Function, compilerOptions = {}) {
  return raw(transpile(fn, compilerOptions));
}

export function transpileAttr(fn: Function, compilerOptions = {}) {
  return transpile(fn, compilerOptions);
}

function toKebabCase(name: string): string {
  return name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

const isVoidElement = (tagName: string) => {
  return [
    'area',
    'base',
    'br',
    'col',
    'commands',
    'embed',
    'hr',
    'img',
    'input',
    'keygen',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr',
  ].includes(tagName);
};

const entityMap: { [key: string]: string } = {
  '&': 'amp',
  '<': 'lt',
  '>': 'gt',
  '"': 'quot',
  "'": '#39',
  '/': '#x2F',
};

function escape(value: string) {
  return value.replace(/[&<>"'\/\\]/g, (s: string) => `&${entityMap[s]};`);
}

function getValue(node: Node) {
  return isRenderable(node) ? node.render() : String(node);
}

function render(node: Node): string {
  if (node === true || node === false || node === null || node === undefined) return '';
  else if (node instanceof Raw || node instanceof Element) return node.render();
  else return escape(getValue(node));
}

function renderChildren(nodes: Node[]) {
  return nodes.map((node) => render(node)).join('');
}

function escapeAttributeValue(node: Node) {
  return getValue(node).replace(/(&)|(")/g, (s) => `&${entityMap[s]};`);
}

function creatAttribute(key: string, value: Node) {
  if (typeof value == 'boolean' || value === undefined) {
    return value ? key : '';
  }
  const stringValue = value instanceof Raw ? value.render() : escapeAttributeValue(value);
  return `${toKebabCase(key)}="${stringValue}"`;
}

function createAttributes(attributes: Attributes | null) {
  const s = Object.entries(attributes || {})
    .map(([key, value]) => creatAttribute(key, value))
    .join(' ');
  return s.length > 0 ? ` ${s}` : '';
}
