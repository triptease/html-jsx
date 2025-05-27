import { parseHTML } from 'linkedom';
import { Project } from 'ts-morph';
import { Options } from 'prettier';

import fs from 'node:fs';
import { intrinsicElements } from './intrinsicElements.js';
import { Attribute, AttributeType, Element } from './types.js';
import { contentCategories } from './contentCategories.js';

async function fetchSpec() {
  const url = 'https://html.spec.whatwg.org/multipage/indices.html';
  const response = await fetch(url);
  return await response.text();
}

const html = await fetchSpec();
const { document } = parseHTML(html);

const elementOverrides: Record<string, Partial<Element>> = {
  // children are marked as "script, data, or script documentation*" which is not very useful because "script" does not refer to a script element
  script: { children: new Set(['text']) },
};

const attributesByElement: Map<string, Attribute[]> = new Map();

function contentCategoriesOrChildren(text: string) {
  return new Set(
    text
      .trim()
      .split(/\s*;\s*/)
      .map((c) => c.replace('*', ''))
      .map((c) => c.replace(/\s.*/, ''))
      .filter((c) => c !== 'empty'),
  );
}

const elements: Element[] = Array.from(document.querySelectorAll('th > code[id^="elements-3:"]')).map((e) => {
  const name = e.textContent!;
  const description = e.closest('th')!.nextElementSibling!.textContent!;
  const categories = contentCategoriesOrChildren(e.closest('th')!.nextElementSibling!.nextElementSibling!.textContent!);
  const children = contentCategoriesOrChildren(
    e.closest('th')!.nextElementSibling!.nextElementSibling!.nextElementSibling!.nextElementSibling!.textContent!,
  );
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

document.querySelectorAll('#attributes-1 tbody th').forEach((e) => {
  const name = e.textContent!.trim();
  const typeString = e.nextElementSibling!.nextElementSibling!.nextElementSibling!.textContent!.trim();
  const type = getAttributeType(typeString);
  const attribute: Attribute = { name, type };
  const elementNames = e
    .nextElementSibling!.textContent!.trim()
    .split(/\s*;\s*/)
    .filter((name) => name !== 'form-associated custom elements')
    .map((name) => name.replace(/\s\(.+\)/, ''));
  elementNames.forEach((elementName) => {
    if (elementName === 'HTML elements') {
      globalAttributes.push(attribute);
    } else {
      const attributes = attributesByElement.get(elementName) || [];
      if (attributes.find((a) => a.name === attribute.name) === undefined) {
        attributes.push(attribute);
      }
      attributesByElement.set(elementName, attributes);
    }
  });
});

const globalEventHandlers: string[] = [];
const bodyEventHandlers: string[] = [];

document.querySelectorAll('#ix-event-handlers tbody th').forEach((e) => {
  const name = e.textContent!.trim();
  const elements = e.nextElementSibling!.textContent!.trim();
  if (elements === 'body') {
    bodyEventHandlers.push(name);
  } else {
    globalEventHandlers.push(name);
  }
});

const project = new Project();
const prettierConfig: Options = { ...JSON.parse(fs.readFileSync('../.prettierrc', 'utf-8')), parser: 'typescript' };

await Promise.all([
  await intrinsicElements(
    project,
    prettierConfig,
    globalAttributes,
    globalEventHandlers,
    bodyEventHandlers,
    elements,
    attributesByElement,
  ),
  await contentCategories(project, prettierConfig, elements),
]);
