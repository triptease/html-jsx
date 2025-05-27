import { Element, jsx, JSXComponent, jsxs } from './jsx-runtime.js';
import { AttributesWithChildren, Fragment } from './types/base.js';
import { contentCategories } from './content-categories.js';

export { jsx, jsxs, Fragment };

type Source = { fileName: string; lineNumber: number; columnNumber: number };

function reportInvalidChild(content: string, type: string, source?: Source) {
  const location = source ? ` at ${source.fileName}:${source.lineNumber}:${source.columnNumber}` : '';
  console.warn(`${content} is not a valid child of ${type}${location}`);
}

function validateChild(child: Element, allowedChildren: Set<string>, type: string, source?: Source) {
  const tagName = child.tagName;
  if (tagName !== null) {
    const childCategories = contentCategories.get(tagName)?.categories;
    if (
      childCategories !== undefined &&
      [tagName, ...childCategories].every((childCategory) => !allowedChildren.has(childCategory))
    ) {
      reportInvalidChild(tagName, type, source);
    }
  }
}

export function jsxDEV(
  type: string | JSXComponent | typeof Fragment,
  props: AttributesWithChildren | null, //Children is Element | Element[] not Node | Node[] I think
  key?: string,
  isStaticChildren?: boolean,
  source?: Source,
  self?: any,
) {
  if (typeof type === 'string') {
    const allowedChildren = contentCategories.get(type)?.children;
    if (allowedChildren && !allowedChildren.has('transparent')) {
      const children = props?.children;
      if (children instanceof Element) {
        validateChild(children, allowedChildren, type, source);
      } else if (Array.isArray(children)) {
        children.forEach((child) => child instanceof Element && validateChild(child, allowedChildren, type));
      } else if (typeof children === 'string') {
        if (!allowedChildren.has('text') && !allowedChildren.has('flow') && !allowedChildren.has('phrasing')) {
          reportInvalidChild('text', type, source);
        }
      }
    }
  }
  return jsx(type, props, key);
}
