import { Project, VariableDeclarationKind } from 'ts-morph';
import { format, Options } from 'prettier';
import { Element } from './types.js';

export async function contentCategories(project: Project, prettierConfig: Options, elements: Element[]) {
  const contentCategoriesFile = project.createSourceFile('../src/content-categories.ts', {}, { overwrite: true });

  contentCategoriesFile.addVariableStatement({
    isExported: true,
    declarations: [
      {
        name: 'contentCategories',
        type: `Map<string, {
      categories: Set<string>;
      children: Set<string>;
    }>`,
        initializer: (writer) => {
          writer.write('new Map([');
          elements.forEach((element, index) => {
            if (index > 0) writer.write(',');
            writer.newLine();
            writer.write(`["${element.name}", {`);
            writer.indent(() => {
              writer.write('categories: new Set([');
              Array.from(element.categories).forEach((category, catIndex) => {
                if (catIndex > 0) writer.write(', ');
                writer.write(`"${category}"`);
              });
              writer.write(']),');
              writer.newLine();
              writer.write('children: new Set([');
              Array.from(element.children).forEach((child, childIndex) => {
                if (childIndex > 0) writer.write(', ');
                writer.write(`"${child}"`);
              });
              writer.write('])');
              writer.newLine();
            });
            writer.write('}]');
          });
          writer.newLine();
          writer.write('])');
        },
      },
    ],
    declarationKind: VariableDeclarationKind.Const,
  });
  contentCategoriesFile.saveSync();
  contentCategoriesFile.replaceWithText(await format(contentCategoriesFile.getFullText(), prettierConfig));
}
