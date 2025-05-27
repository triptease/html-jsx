import { Renderable } from './renderable.js';

export const Fragment = Symbol.for('jsx.fragment');

export type Node = number | boolean | string | Renderable;
export type Attributes = { [key: string]: Node };
export type Children = Node | Node[];
export type AttributesWithChildren = Attributes & { children?: Children };
export type PropsWithChildren<T> = T & { children: Children };
