import { AttributesWithChildren, Fragment } from './elements/types.js';
import { Element } from './elements/renderable.js';

export { PropsWithChildren, Children, Node, Fragment } from './elements/types.js';
export { raw } from './elements/renderable.js';
export type * from './elements/intrinsic-elements.js';

export interface JSXComponent {
  (attributes: AttributesWithChildren | null): Element;
}

export function jsx(
  type: string | JSXComponent | typeof Fragment,
  props: AttributesWithChildren | null,
  _key?: string,
): Element {
  const { children, ...attributes } = props || {};
  const childrenArray = children === undefined ? [] : Array.isArray(children) ? children.flat() : [children];

  if (type === Fragment) {
    return new Element(null, null, childrenArray);
  } else if (type instanceof Function) {
    return type(props);
  } else {
    return new Element(type, attributes, childrenArray);
  }
}

export const jsxs = jsx;
