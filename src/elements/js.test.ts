import { describe, expect, it } from 'vitest';
import { extractBody } from './js.js';

describe('Arrow functions', () => {
  it('extract body without braces', () => {
    const result = extractBody(() => console.log('boo'));
    expect(result).toBe(`console.log("boo")`);
  });

  it('extract body with braces', () => {
    const result = extractBody(() => {
      console.log('boo');
    });
    expect(result).toBe(`console.log("boo");`);
  });

  it('extract body from async function', () => {
    const result = extractBody(async () => console.log('boo'));
    expect(result).toBe(`console.log("boo")`);
  });

  it('extract body with multiple parameters', () => {
    const result = extractBody((x: number, y: number) => x + y);
    expect(result).toBe('x + y');
  });

  it('extract body with destructured parameters', () => {
    const result = extractBody(({ name, age }: { name: string; age: number }) => console.log(name, age));
    expect(result).toBe('console.log(name, age)');
  });
});

describe('Anonymous functions', () => {
  it('extract body from anonymous function', () => {
    const result = extractBody(function () {
      console.log('boo');
    });
    expect(result).toBe(`console.log("boo");`);
  });

  it('extract body from async anonymous function', () => {
    const result = extractBody(async function () {
      console.log('boo');
    });
    expect(result).toBe(`console.log("boo");`);
  });

  it('extract body with multiple parameters', () => {
    const result = extractBody(function (a: number, b: number) {
      return a * b;
    });
    expect(result).toBe('return a * b;');
  });

  it('extract body with destructured parameters', () => {
    const result = extractBody(function ({ name, age }: { name: string; age: number }) {
      console.log(name, age);
    });
    expect(result).toBe('console.log(name, age);');
  });
});

describe('Complex cases', () => {
  it('should handle nested parentheses in parameters', () => {
    const result = extractBody((x: number) => x + 1);
    expect(result).toBe('x + 1');
  });

  it('should handle deep destructuring', () => {
    const result = extractBody(({ foo: { bar } }: any, [a, b]: [any, any]) => console.log(bar, a, b));
    expect(result).toBe('console.log(bar, a, b)');
  });
});
