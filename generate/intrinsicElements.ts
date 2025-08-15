import fs from 'node:fs';
import { Project } from 'ts-morph';
import { Attribute, AttributeType, Element } from './types.js';
import { format, Options } from 'prettier';

const attributeOverrides: Record<string, string> = {
  // The hidden attribute also acts as a boolean since invalid values are mapped to hidden and empty values are mapped to false. https://html.spec.whatwg.org/multipage/interaction.html#attr-hidden
  hidden: '"hidden" | "until-found" | boolean',
};

function typeForAttribute(attribute: Attribute) {
  if (attributeOverrides[attribute.name]) {
    return attributeOverrides[attribute.name];
  } else if (attribute.type === AttributeType.Boolean) {
    return 'BooleanAttribute';
  } else if (attribute.type === AttributeType.Numeric) {
    return 'NumericAttribute';
  } else if (attribute.type === AttributeType.Text) {
    return 'StringAttribute';
  } else {
    throw new Error('Unknown type');
  }
}

function kebabToPascalCase(str: String) {
  return str.replace(/(^\w|-\w)/g, (match) => match.replace('-', '').toUpperCase());
}

function kebabToCamelCase(str: String) {
  return str.replace(/(-\w)/g, (match) => match.replace('-', '').toUpperCase());
}

function typeForElement(element: Element) {
  return kebabToPascalCase(`html-tag-${element.name}`);
}

function childrenType(element: Element, elements: Element[]) {
  const allContentCategories = new Set(elements.flatMap((e) => Array.from(e.categories)));
  const childTypes = [...element.children].reduce((types, child) => {
    if (allContentCategories.has(child) || child === 'transparent') {
      return types.add('AnyContentCategory');
    } else if (child === 'text') {
      return types.add('TextContent');
    } else {
      const element = elements.find((e) => e.name === child);
      if (element) {
        const type = typeForElement(element);
        return types.add(type);
      }
      return types;
    }
  }, new Set<string>());
  if (childTypes.size === 0) return 'never';
  else {
    const allTypes = [...childTypes].join(' | ');
    return `${allTypes} | (${allTypes})[]`;
  }
}

export async function intrinsicElements(
  project: Project,
  prettierConfig: Options,
  globalAttributes: Attribute[],
  globalEventHandlers: string[],
  bodyEventHandlers: string[],
  elements: Element[],
  attributesByElement: Map<string, Attribute[]>,
) {
  const sourceFile = project.createSourceFile('../src/elements/intrinsic-elements.ts', {}, { overwrite: true });

  const ariaAttributes: string[] = JSON.parse(fs.readFileSync('aria-attributes.json', 'utf-8'));
  sourceFile.addInterface({
    name: 'AriaAttributes',
    isExported: true,
    properties: ariaAttributes.map((attributeName) => ({
      name: `'${attributeName}'`,
      type: 'StringAttribute',
      hasQuestionToken: true,
    })),
  });

  sourceFile.addInterface({
    name: 'GlobalAttributes',
    isExported: true,
    properties: globalAttributes.map((a) => ({
      name: a.name,
      type: typeForAttribute(a),
      hasQuestionToken: true,
    })),
  });

  sourceFile.addInterface({
    name: 'GlobalEventHandlers',
    isExported: true,
    properties: globalEventHandlers.map((name) => ({ name, type: 'StringAttribute', hasQuestionToken: true })),
  });

  sourceFile.addInterface({
    name: 'BodyEventHandlers',
    isExported: true,
    extends: ['GlobalEventHandlers'],
    properties: bodyEventHandlers.map((name) => ({ name, type: 'StringAttribute', hasQuestionToken: true })),
  });

  sourceFile.addInterface({
    name: 'Renderable',
    isExported: true,
    methods: [
      {
        name: 'render',
        returnType: 'string',
      },
    ],
  });

  sourceFile.addTypeAlias({
    name: 'TextContent',
    isExported: true,
    type: 'Renderable | string | number',
  });

  sourceFile.addTypeAlias({
    name: 'StringAttribute',
    isExported: true,
    type: 'Renderable | string | number | boolean',
  });

  sourceFile.addTypeAlias({
    name: 'NumericAttribute',
    isExported: true,
    type: 'Renderable | string | number',
  });

  sourceFile.addTypeAlias({
    name: 'BooleanAttribute',
    isExported: true,
    type: '"true" | "false" | boolean',
  });

  sourceFile.addInterface({ name: 'AnyContentCategory', isExported: true });

  elements.forEach((element) => {
    sourceFile.addInterface({
      name: typeForElement(element),
      isExported: true,
      extends: [
        'GlobalAttributes',
        'AriaAttributes',
        element.name === 'body' ? 'BodyEventHandlers' : 'GlobalEventHandlers',
      ],
      properties: [
        ...(attributesByElement.get(element.name) || []).map((a) => ({
          name: kebabToCamelCase(a.name),
          type: typeForAttribute(a),
          hasQuestionToken: true,
        })),
        {
          name: 'children',
          type: childrenType(element, elements),
          hasQuestionToken: true,
        },
      ],
    });
  });

  const jsxNamespace = sourceFile.addModule({
    name: 'JSX',
    isExported: true,
    hasDeclareKeyword: false,
  });

  jsxNamespace.addInterface({
    name: 'IntrinsicElements',
    isExported: true,
    properties: elements.map((e) => ({
      name: e.name,
      type: typeForElement(e),
    })),
  });

  await sourceFile.save();

  const formatted = await format(sourceFile.getFullText(), prettierConfig);
  sourceFile.replaceWithText(formatted);
}
