import * as ts from 'typescript';

/**
 * Custom TypeScript transformer that replaces transpileScript and transpileAttr calls
 * with their transpiled JavaScript equivalents at compile time.
 *
 * The difference between the two functions is that transpileScript does not escape the compiled Javascript.
 */
export default function transpileTransformer(program?: ts.Program): ts.TransformerFactory<ts.SourceFile> {
  return (context: ts.TransformationContext) => {
    return (sourceFile: ts.SourceFile) => {
      let needsRawImport = false;

      function visit(node: ts.Node): ts.Node {
        if (ts.isCallExpression(node)) {
          const expression = node.expression;

          let isTranspileScript = false;
          let isTranspileAttr = false;

          if (ts.isIdentifier(expression)) {
            isTranspileScript = expression.text === 'transpileScript';
            isTranspileAttr = expression.text === 'transpileAttr';
          } else if (ts.isPropertyAccessExpression(expression) && ts.isIdentifier(expression.name)) {
            isTranspileScript = expression.name.text === 'transpileScript';
            isTranspileAttr = expression.name.text === 'transpileAttr';
          }

          if (isTranspileScript || isTranspileAttr) {
            const firstArg = node.arguments[0];

            if (firstArg && (ts.isArrowFunction(firstArg) || ts.isFunctionExpression(firstArg))) {
              try {
                const transpiledCode = transpileFunction(firstArg, program);

                if (isTranspileScript) {
                  needsRawImport = true;
                  return ts.factory.createCallExpression(ts.factory.createIdentifier('raw'), undefined, [
                    ts.factory.createStringLiteral(transpiledCode),
                  ]);
                } else {
                  return ts.factory.createStringLiteral(transpiledCode);
                }
              } catch (error) {
                console.error(
                  `Failed to transpile function: ${error instanceof Error ? error.message : String(error)}`,
                );
                return node;
              }
            }
          }
        }

        return ts.visitEachChild(node, visit, context);
      }

      const transformedFile = ts.visitNode(sourceFile, visit) as ts.SourceFile;

      if (needsRawImport) {
        return addRawToExistingImport(transformedFile);
      }

      return transformedFile;
    };
  };
}

function transpileFunction(fn: ts.ArrowFunction | ts.FunctionExpression, program?: ts.Program): string {
  const body: ts.Block | ts.ConciseBody = fn.body;
  const sourceFile = fn.getSourceFile();
  const printer = ts.createPrinter();

  let bodyText: string;
  if (ts.isBlock(body)) {
    bodyText = body.statements.map((stmt) => printer.printNode(ts.EmitHint.Unspecified, stmt, sourceFile)).join(' ');
  } else {
    bodyText = printer.printNode(ts.EmitHint.Unspecified, body, sourceFile) + ';';
  }

  const compilerOptions: ts.CompilerOptions = program?.getCompilerOptions() || {
    target: ts.ScriptTarget.ES2020,
    lib: ['dom', 'dom.iterable'] as any,
  };

  const result = ts.transpileModule(bodyText, {
    compilerOptions,
  });

  return result.outputText.trim();
}

function addRawToExistingImport(sourceFile: ts.SourceFile): ts.SourceFile {
  const hasRawImport = sourceFile.statements.some(
    (statement) =>
      ts.isImportDeclaration(statement) &&
      statement.moduleSpecifier &&
      ts.isStringLiteral(statement.moduleSpecifier) &&
      statement.moduleSpecifier.text === '@triptease/html-jsx' &&
      statement.importClause?.namedBindings &&
      ts.isNamedImports(statement.importClause.namedBindings) &&
      statement.importClause.namedBindings.elements.some((element) => element.name.text === 'raw'),
  );

  if (hasRawImport) {
    return sourceFile;
  }

  const statements = sourceFile.statements.map((statement) => {
    if (
      ts.isImportDeclaration(statement) &&
      statement.moduleSpecifier &&
      ts.isStringLiteral(statement.moduleSpecifier) &&
      statement.moduleSpecifier.text === '@triptease/html-jsx' &&
      statement.importClause?.namedBindings &&
      ts.isNamedImports(statement.importClause.namedBindings)
    ) {
      const existingImports = statement.importClause.namedBindings.elements;
      const newImports = [
        ...existingImports,
        ts.factory.createImportSpecifier(false, undefined, ts.factory.createIdentifier('raw')),
      ];

      return ts.factory.createImportDeclaration(
        statement.modifiers,
        ts.factory.createImportClause(false, statement.importClause.name, ts.factory.createNamedImports(newImports)),
        statement.moduleSpecifier,
        statement.attributes,
      );
    }
    return statement;
  });

  return ts.factory.updateSourceFile(sourceFile, statements);
}
