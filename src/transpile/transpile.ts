import { Raw } from '../elements/renderable.js';

const errorMessage =
  'should be handled by a custom TypeScript transformer at compile time. Make sure you have configured it correctly.';

export function transpileScript(fn: Function, compilerOptions = {}): Raw {
  throw new Error(`transpileScript ${errorMessage}`);
}

export function transpileAttr(fn: Function, compilerOptions = {}): string {
  throw new Error(`transpileAttr ${errorMessage}`);
}
