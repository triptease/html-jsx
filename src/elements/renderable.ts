import { Attributes, Node } from './types.js';

export interface Renderable {
  render(): string;
}

export class Raw implements Renderable {
  constructor(private readonly value: string) {
    console.log('constructing ' + value);
  }

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
