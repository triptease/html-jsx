import {parseHTML} from 'linkedom';
import {Project} from 'ts-morph';

import fs from 'fs';

async function fetchSpec() {
  const url = 'https://html.spec.whatwg.org/multipage/indices.html';
  const response = await fetch(url);
  return await response.text();
}

const html = await fetchSpec();
const { document } = parseHTML(html);

interface Element {
  name: string;
  description: string;
  categories: Set<string>;
  children: Set<string>;
}

enum AttributeType {
  Text, Boolean, Numeric
}

interface Attribute {
  name: string;
  type: AttributeType;
}

const attributeOverrides: Record<string, string> = {
  // The hidden attribute also acts as a boolean since invalid values are mapped to hidden and empty values are mapped to false. https://html.spec.whatwg.org/multipage/interaction.html#attr-hidden
  'hidden': '"hidden" | "until-found" | boolean',
};

const elementOverrides: Record<string, Partial<Element>> = {
  // children are marked as "script, data, or script documentation*" which is not very useful because "script" does not refer to a script element
  script: {children: new Set(['text'])}
};

const attributesByElement: Map<string, Attribute[]> = new Map();

function contentCategoriesOrChildren(text: string) {
  return new Set(text.trim()
    .split(/\s*;\s*/)
    .map(c => c.replace('*', ''))
    .map(c => c.replace(/\s.*/, ''))
    .filter(c => c !== 'empty'));
}

const elements: Element[] = Array.from(document.querySelectorAll('th > code[id^="elements-3:"]'))
  .map(e => {
    const name = e.textContent!;
    const description = e.closest('th')!.nextElementSibling!.textContent!;
    const categories = contentCategoriesOrChildren(e.closest('th')!.nextElementSibling!.nextElementSibling!.textContent!);
    const children = contentCategoriesOrChildren(e.closest('th')!.nextElementSibling!.nextElementSibling!.nextElementSibling!.nextElementSibling!.textContent!);
    return { name, description, categories, children, ...elementOverrides[name] };
  });

function getAttributeType(value: string) {
  if (value === 'Boolean attribute') {
    return AttributeType.Boolean;
  } else if (value.toLowerCase().includes('integer') || value.toLowerCase().includes('floating-point number')) {
    return AttributeType.Numeric;
  } else {
    return AttributeType.Text;
  }
}

const globalAttributes: Attribute[] = [];

document.querySelectorAll('#attributes-1 tbody th').forEach(e => {
  const name = e.textContent!.trim();
  const typeString = e.nextElementSibling!.nextElementSibling!.nextElementSibling!.textContent!.trim();
  const type = getAttributeType(typeString);
  const attribute: Attribute = { name, type };
  const elementNames = e.nextElementSibling!.textContent!.trim().split(/\s*;\s*/)
    .filter(name => name !== 'form-associated custom elements')
    .map(name => name.replace(/\s\(.+\)/, ''));
  elementNames.forEach(elementName => {
    if (elementName === 'HTML elements') {
      globalAttributes.push(attribute);
    } else {
      const attributes = attributesByElement.get(elementName) || [];
      if (attributes.find(a => a.name === attribute.name) === undefined) {
        attributes.push(attribute);
      }
      attributesByElement.set(elementName, attributes);
    }
  });
});

const globalEventHandlers: string[] = [];
const bodyEventHandlers: string[] = [];

document.querySelectorAll('#ix-event-handlers tbody th').forEach(e => {
  const name = e.textContent!.trim();
  const elements = e.nextElementSibling!.textContent!.trim();
  if (elements === 'body') {
    bodyEventHandlers.push(name);
  } else {
    globalEventHandlers.push(name);
  }
});

const project = new Project();
const sourceFile = project.createSourceFile('../src/types/intrinsic-elements.ts', {}, { overwrite: true });

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

function addMarkerInterface(interfaceName: string) {
  sourceFile.addInterface({
    name: interfaceName,
    isExported: true,
  });
}

function kebabToPascalCase(str: String) {
  return str.replace(/(^\w|-\w)/g, match => match.replace('-', '').toUpperCase());
}

function kebabToCamelCase(str: String) {
  return str.replace(/(-\w)/g, match => match.replace('-', '').toUpperCase());
}

function typeForElement(element: Element) {
  return kebabToPascalCase(`html-tag-${element.name}`);
}

const ariaAttributes: string[] = JSON.parse(fs.readFileSync('aria-attributes.json', 'utf-8'));
sourceFile.addInterface({
  name: 'AriaAttributes',
  isExported: true,
  properties: ariaAttributes.map(attributeName => ({
    name: `'${attributeName}'`,
    type: 'StringAttribute',
    hasQuestionToken: true,
  })),
});

sourceFile.addInterface({
  name: 'GlobalAttributes',
  isExported: true,
  properties: globalAttributes.map(a => ({
    name: a.name,
    type: typeForAttribute(a),
    hasQuestionToken: true,
  })),
});

sourceFile.addInterface({
  name: 'GlobalEventHandlers',
  isExported: true,
  properties: globalEventHandlers.map(name => ({ name, type: 'string', hasQuestionToken: true })),
});

sourceFile.addInterface({
  name: 'BodyEventHandlers',
  isExported: true,
  extends: ['GlobalEventHandlers'],
  properties: bodyEventHandlers.map(name => ({ name, type: 'string', hasQuestionToken: true })),
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


function getContentCategoryInterfaceName(child: string) {
  return kebabToPascalCase(child + '-content-category');
}

addMarkerInterface('AnyContentCategory');
const contentCategories = new Set(elements.flatMap(e => Array.from(e.categories)));
contentCategories.forEach(category =>
  addMarkerInterface(getContentCategoryInterfaceName(category)))
;

function getChildType(element: Element) {
  if (element.children.has('transparent')) {
    return ['AnyContentCategory', 'TextContent'];
  }

  const interfaces = Array.from(element.children).flatMap(child => {
    if (contentCategories.has(child)) {
      if (child === 'phrasing' || child === 'flow') {
        return [getContentCategoryInterfaceName(child), 'TextContent'];
      }
      return [getContentCategoryInterfaceName(child)];
    } else if (child === 'text') {
      return ['TextContent'];
    } else {
      const element = elements.find(e => e.name === child);
      if (element) {
        return [typeForElement(element)];
      } else {
        return [];
      }
    }
  });

  return interfaces.length === 0 ? ['never'] : interfaces;
}

elements.forEach(element => {
  const childType = getChildType(element).join(' | ');
  sourceFile.addInterface({
    name: typeForElement(element),
    isExported: true,
    extends: [
      'GlobalAttributes',
      'AriaAttributes',
      element.name === 'body' ? 'BodyEventHandlers' : 'GlobalEventHandlers',
      ...Array.from(element.categories).map(c => getContentCategoryInterfaceName(c)),
    ],
    properties: [...(attributesByElement.get(element.name) || []).map(a => ({
      name: kebabToCamelCase(a.name),
      type: typeForAttribute(a),
      hasQuestionToken: true,
    })), {
      name: 'children',
      type: `${childType} | (${childType})[]`,
      hasQuestionToken: true,
    }],
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
  properties: elements.map(e => ({
    name: e.name,
    type: typeForElement(e),
  })),
});

sourceFile.saveSync();






