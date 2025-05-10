export interface Renderable {
    render(): string;
}

export const Fragment = Symbol.for('jsx.fragment');

export function isRenderable(o: any): o is Renderable {
    return o && typeof o.render === 'function' && o.render.length === 0;
}

export type TextContent = Renderable | string | number;
export type StringAttribute = Renderable | string | number | boolean;
export type NumericAttribute = Renderable | string | number;
export type BooleanAttribute = "true" | "false" | boolean;

export type Node = number | boolean | string | Renderable;
export type Attributes = { [key: string]: Node; };
export type Children = Node | Node[];
export type AttributesWithChildren = Attributes & { children?: Children; }
export type PropsWithChildren<T> = T & { children: Children }