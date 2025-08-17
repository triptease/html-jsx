import { describe, expect, test } from 'vitest';
import { transpileScript, transpileAttr } from '../src/index.js';
import ts from 'typescript';

describe('transpiles script', () => {
  test('with arrow function with parentheses', () => {
    expect(
      `${(
        <script>
          {transpileScript(() => {
            const foo = 'bar' as string;
          })}
        </script>
      )}`,
    ).toEqualIgnoringFormatting(`<script>const foo = "bar";</script>`);
  });

  test('with arrow function without parentheses', () => {
    expect(`${(<script>{transpileScript(() => 'foo' as string)}</script>)}`).toEqualIgnoringFormatting(
      '<script>"foo";</script>',
    );
  });

  test('with function declaration', () => {
    expect(
      `${(
        <script>
          {transpileScript(function () {
            // eslint-disable-next-line
            const foo = 'bar' as string;
          })}
        </script>
      )}`,
    ).toEqualIgnoringFormatting('<script>const foo = "bar";</script>');
  });

  test('with DOM APIs in transpilation', () => {
    expect(
      `${(
        <script>
          {transpileScript(() => {
            const element: HTMLElement = document.getElementById('test') as HTMLElement;
            element.classList.add('active');
          })}
        </script>
      )}`,
    ).toEqualIgnoringFormatting(`
      <script>
        const element = document.getElementById("test");
        element.classList.add("active");
      </script>`);
  });

  test('defaults to modern ECMA Script target', () => {
    expect(
      `${(
        <script>
          {transpileScript(() => {
            const fn = (x: number) => x * 2;
          })}
        </script>
      )}`,
    ).toEqualIgnoringFormatting('<script>const fn = (x) => x * 2;</script>');
  });

  test('can override compile options with older ECMA Script target', () => {
    expect(
      `${(
        <script>
          {transpileScript(
            () => {
              const fn = (x: number) => x * 2;
            },
            { target: ts.ScriptTarget.ES5 },
          )}
        </script>
      )}`,
    ).toEqualIgnoringFormatting('<script>var fn = function (x) { return x * 2; };</script>');
  });
});

describe('transpiles attributes', () => {
  test('event handler', () => {
    expect(
      `${(<input onchange={transpileAttr((event: Event) => console.log((event.target as HTMLInputElement).value))} />)}`,
    ).toEqualIgnoringFormatting('<input onchange="console.log(event.target.value);">');
  });

  test('event handler can reference this', () => {
    expect(
      `${(<input onchange={transpileAttr(function (this: HTMLInputElement) { console.log((this.value))})} />)}`,
    ).toEqualIgnoringFormatting('<input onchange="console.log(this.value);">');
  });

  test('escapes quotes', () => {
    expect(`${(<input onchange={transpileAttr(() => console.log('foo'))} />)}`).toEqualIgnoringFormatting(
      '<input onchange="console.log(&quot;foo&quot;);">',
    );
  });
});
