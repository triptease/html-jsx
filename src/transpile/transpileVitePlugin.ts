import * as ts from 'typescript';
import { Plugin } from 'vite';
import transpileTransformer from './transpileTransformer.js';

/**
 * Vite plugin that applies our custom TypeScript transformer for transpileScript and transpileAttr calls
 */
export function transpileVitePlugin(): Plugin {
  return {
    name: 'transpile-plugin',
    transform(code: string, id: string) {
      if (!id.endsWith('.tsx')) {
        return null;
      }

      if (!code.includes('transpileScript') && !code.includes('transpileAttr')) {
        return null;
      }

      try {
        const sourceFile = ts.createSourceFile(
          id,
          code,
          ts.ScriptTarget.Latest,
          true
        );

        const transformerFactory = transpileTransformer();
        const result = ts.transform(sourceFile, [transformerFactory]);
        const transformedSourceFile = result.transformed[0];

        if (transformedSourceFile) {
          const printer = ts.createPrinter();
          const transformedCode = printer.printFile(transformedSourceFile);
          result.dispose();
          return {
            code: transformedCode,
            map: null
          };
        }

        result.dispose();
        return null;
      } catch (error) {
        console.error(`Error transforming ${id}:`, error);
        return null;
      }
    }
  };
}