import { jsx, JSXComponent, jsxs } from './jsx-runtime.js';
import { AttributesWithChildren, Fragment } from './types/base.js';

export { jsx, jsxs, Fragment };

//TODO: Explore debug options
export function jsxDEV(
  type: string | JSXComponent | typeof Fragment,
  props: AttributesWithChildren | null,
  key?: string,
  isStaticChildren?: boolean,
  source?: { fileName: string; lineNumber: number; columnNumber: number },
  self?: any,
) {
  return jsx(type, props, key);
}
