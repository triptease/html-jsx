export interface Element {
  name: string;
  description: string;
  categories: Set<string>;
  children: Set<string>;
}

export enum AttributeType {
  Text,
  Boolean,
  Numeric,
}

export interface Attribute {
  name: string;
  type: AttributeType;
}
