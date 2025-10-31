import { raw } from './renderable.js';

export function extractBody(fn: Function): string {
  const fnString = fn.toString();
  const argStart = fnString.indexOf('(');
  if (argStart === -1) {
    throw new Error(`Invalid function format: missing opening parenthesis in ${fnString}`);
  }

  const argEnd = findMatching(fnString, argStart);
  if (argEnd === -1) {
    throw new Error(`Invalid function format: missing closing parenthesis in ${fnString}`);
  }

  const bodyStart = fnString.indexOf('{', argEnd);
  if (bodyStart === -1) {
    const expressionStart = fnString.indexOf('=>', argEnd);
    if (expressionStart === -1) {
      throw new Error(`Invalid function format: missing arrow in ${fnString}`);
    }
    return fnString.slice(expressionStart + 2).trim();
  }

  const bodyEnd = findMatching(fnString, bodyStart);
  if (bodyEnd === -1) {
    throw new Error(`Invalid function format: missing closing brace in ${fnString}`);
  }

  return fnString.slice(bodyStart + 1, bodyEnd).trim();
}

function findMatching(str: string, start: number): number {
  const open = str[start];
  const close = open === '(' ? ')' : open === '{' ? '}' : undefined;
  let depth = 0;
  for (let i = start; i < str.length; i++) {
    if (str[i] === open) depth++;
    else if (str[i] === close) depth--;
    if (depth === 0) return i;
  }
  return -1;
}

function fnBody(fn: Function, args?: Record<string, any>) {
  const body = extractBody(fn);
  if (args) {
    const inlineData = `const args = JSON.parse(${JSON.stringify(JSON.stringify(args))});`;
    return `${inlineData}\n${body}`;
  } else {
    return body;
  }
}

export function js<T extends Record<string, any>>(fn: (args: T) => any, args?: T) {
  return raw(fnBody(fn, args));
}

export function jsAttr<T extends Record<string, any>>(fn: (args: T) => any, args?: T) {
  return fnBody(fn, args);
}
