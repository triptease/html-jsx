import { describe, expect, test } from 'vitest';
import { Children, PropsWithChildren, Renderable, raw, js, jsAttr } from '../src/index.js';

describe('elements', () => {
  test('renders an element', () => {
    expect(`${(<p>Foo</p>)}`).toEqual('<p>Foo</p>');
  });

  test('renders an element with children', () => {
    expect(
      `${(
        <div>
          <p>Foo</p>
          <p>Bar</p>
        </div>
      )}`,
    ).toEqual('<div><p>Foo</p><p>Bar</p></div>');
  });

  test('escapes content', () => {
    const maliciousContent = "<script>alert('XSS')</script>";
    expect(
      `${(
        <div>
          <p>{maliciousContent}</p>
        </div>
      )}`,
    ).toEqual('<div><p>&lt;script&gt;alert(&#39;XSS&#39;)&lt;&#x2F;script&gt;</p></div>');
  });

  test('raw content is not escaped', () => {
    const content = "<script>alert('trusted')</script>";
    expect(
      `${(
        <div>
          <p>{raw(content)}</p>
        </div>
      )}`,
    ).toEqual("<div><p><script>alert('trusted')</script></p></div>");
  });

  test.each([[false], [true], [null], [undefined]])(`%s is not rendered`, (value) => {
    expect(`${(<>{value}</>)}`).toEqual('');
  });

  test(`numeric content %s is rendered as a string`, () => {
    expect(`${(<span>{99}</span>)}`).toEqual('<span>99</span>');
  });

  test('renderable content is respected', () => {
    class MyRenderable implements Renderable {
      render = () => 'Custom rendering';
    }

    expect(`${(<span>{new MyRenderable()}</span>)}`).toEqual('<span>Custom rendering</span>');
  });

  test('renders a custom element with custom attributes', () => {
    expect(`${(<some-custom-element someAttribute="data">Foo</some-custom-element>)}`).toEqual(
      '<some-custom-element some-attribute="data">Foo</some-custom-element>',
    );
  });

  test('arrays of elements are flattened', () => {
    const arrayOfElements = [<p>Foo</p>, <p>Bar</p>];
    const element = <p>Baz</p>;
    expect(
      `${(
        <div>
          {arrayOfElements}
          {element}
        </div>
      )}`,
    ).toEqual('<div><p>Foo</p><p>Bar</p><p>Baz</p></div>');
  });
});

describe('void element', () => {
  test.each([
    'area',
    'base',
    'br',
    'col',
    'commands',
    'embed',
    'hr',
    'img',
    'input',
    'keygen',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr',
  ])(`void element %s does not have a closing tag`, (tag: string) => {
    const Element = tag as any;
    expect(`${(<Element />)}`).toEqual(`<${tag}>`);
  });
});

describe('javascript', () => {
  test('renders a javascript arrow function', () => {
    const fn = () => console.log('embedded JS');
    expect(`${(<script>{js(fn)}</script>)}`).toEqual('<script>console.log("embedded JS")</script>');
    expect(`${(<div onclick={jsAttr(fn)}></div>)}`).toEqual(
      '<div onclick="console.log(&quot;embedded JS&quot;)"></div>',
    );
  });

  test.each([
    [
      'arrow function with braces',
      () => {
        console.log('embedded JS');
      },
    ],
    [
      'anonymous function',
      function () {
        console.log('embedded JS');
      },
    ],
    [
      'named function expression',
      function myFunc() {
        console.log('embedded JS');
      },
    ],
    [
      'async arrow function',
      async () => {
        console.log('embedded JS');
      },
    ],
    [
      'async anonymous function',
      async function () {
        console.log('embedded JS');
      },
    ],
  ])('renders a javascript %s', (_, fn) => {
    expect(`${(<script>{js(fn)}</script>)}`).toEqual('<script>console.log("embedded JS");</script>');
    expect(`${(<div onclick={jsAttr(fn)}></div>)}`).toEqual(
      '<div onclick="console.log(&quot;embedded JS&quot;);"></div>',
    );
  });
});

describe('attributes', () => {
  test('renders a string attribute', () => {
    expect(`${(<p style={'color:blue'}>blue</p>)}`).toEqual('<p style="color:blue">blue</p>');
  });

  test('escapes attributes by default', () => {
    const alt = 'An attribute with &, <, >, /, " and \' in it.';
    expect(`${(<img alt={alt} src={'image.png'} />)}`).toEqual(
      '<img alt="An attribute with &amp;, <, >, /, &quot; and \' in it." src="image.png">',
    );
  });

  test('a false boolean attribute is omitted', () => {
    expect(`${(<input required={false} />)}`).toEqual('<input>');
  });

  test('a true boolean attribute is reduced to the key only', () => {
    expect(`${(<input required={true} />)}`).toEqual('<input required>');
  });

  test('a boolean attribute can omit the value', () => {
    expect(`${(<input required />)}`).toEqual('<input required>');
  });

  test('a numeric attribute is rendered as a string', () => {
    expect(`${(<hr data-x={99} />)}`).toEqual(`<hr data-x="99">`);
  });

  test('a raw attribute is not escaped', () => {
    expect(`${(<hr data-x={raw('&')} />)}`).toEqual(`<hr data-x="&">`);
  });

  test('a renderable attribute is respected', () => {
    class MyRenderable implements Renderable {
      render = () => 'Custom rendering';
    }

    expect(`${(<hr data-x={new MyRenderable()} />)}`).toEqual('<hr data-x="Custom rendering">');
  });
});

describe('custom components', () => {
  test('renders a component', () => {
    function ImageInDiv({ alt, src }: { alt: string; src: string }) {
      return (
        <div>
          <img alt={alt} src={src} />
        </div>
      );
    }

    expect(`${(<ImageInDiv alt={'image'} src={'path'} />)}`).toEqual('<div><img alt="image" src="path"></div>');
  });

  test('renders a component with children', () => {
    function ButtonInDiv({ className, children }: PropsWithChildren<{ className?: string }>) {
      return (
        <div>
          <div class={className}>{children}</div>
        </div>
      );
    }

    expect(
      `${(
        <ButtonInDiv>
          <p>Click</p>
          <p>me</p>
        </ButtonInDiv>
      )}`,
    ).toEqual('<div><div><p>Click</p><p>me</p></div></div>');
  });
});

describe('fragments', () => {
  test('renders a fragment', () => {
    expect(
      `${(
        <>
          <p>Foo</p>
          <p>Bar</p>
        </>
      )}`,
    ).toEqual('<p>Foo</p><p>Bar</p>');
  });
});

describe('raw', () => {
  test('raw values can be debugged', () => {
    expect(raw('Some raw value').toString()).toEqual('Raw[Some raw value]');
  });
});

declare module '@triptease/html-jsx/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements {
      'some-custom-element': {
        someAttribute: string;
        children?: Children;
      };
    }
  }
}
