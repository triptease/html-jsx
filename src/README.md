# html-jsx: Typed HTML templates using JSX

Generate static HTML from JSX/TSX templates. The perfect solution to server side rendering of HTML, more performant than
template engines with type checking for HTML.

## Why use html-jsx?

- Faster than traditional template engines since most of the work is done by the TypeScript compiler.
- Type checking for HTML using type definitions generated from the WHATWG Living Standard.
- It's secure. Escaping of tag contents and attributes to avoid XSS attacks.
- HTML structure validation using WHATWG content categories.

## Getting started

Add the package as a dev dependency
```shell
npm add -D @triptease/html-jsx
```

Add the JSX factory into `tsconfig.json`
```json
{
  "compilerOptions": {
    ...
    "jsx": "react-jsx",
    "jsxImportSource": "@triptease/html-jsx"
  }
}
```

Write your templates using JSX/TSX, no imports required.

```tsx
function greet(name: string) {
  return (
    <div>
      <p>
        Hello ${name}
      </p>
    </div>
  );
}
```

## Features

### HTML Type safety

**Invalid HTML elements are caught at compile time**

```tsx
<h7></h7>
```

Error
```
TS2339: Property h7 does not exist on type JSX.IntrinsicElements
```

**Invalid HTML attributes are caught at compile time**

```tsx
<div classs="my-class"></div>
```

Error
```
TS2322: Type { classs: string; } is not assignable to type HtmlTagDiv
Property 'classs' does not exist on type HtmlTagDiv. Did you mean 'class'?
```

**HTML attributes are type-checked**

```tsx
<input required="falsey"></input>
```

Error
```
TS2820: Type 'falsey' is not assignable to type BooleanAttribute | undefined. Did you mean 'false'?
```


### Structural HTML validation

Some limited validation of HTML structure using the WHATWG content categories is applied at runtime when NODE_ENV is set to 'development'.

```tsx
<span>
  <div></div>
</span>
```

Warning on console
```
div is not a valid child of span at /path/to/file.tsx:linenumber:position
```

### Avoid escaping

All content of HTML tags and attributes are escaped by default to avoid XSS attacks. 
Similarly to React's dangerouslySetInnerHTML, you can disable escaping by using the `raw` function.

```tsx
import { raw } from '@triptease/html-jsx';

const content = '<script>arbitraryCode()</script>';

{content} // Outputs &lt;script&gt;arbitraryCode()&lt;&#x2F;script&gt;
{raw(content)} // Outputs <script>arbitraryCode()</script>
```

Attribute escaping can also be disabled

```tsx
import { raw } from '@triptease/html-jsx';

<hr data-x={raw('&')} /> // Outputs <hr data-x="&" />
<hr data-x={'&'} /> // Outputs <hr data-x="&amp;" />
```


### Embedded Javascript

TypeScript can be transpiled to JavaScript and embedded in HTML. This allows you to write TypeScript code in your tsx 
files and benefit from syntax highlighting and compiler and linter warnings from your IDE.

Use the `transpileScript` function passing it an arrow function to transpile the body of the function.

```tsx
import { transpileScript } from '@triptease/html-jsx';

<script>
    {transpileScript(() => {
        const element: HTMLElement = document.getElementById('test') as HTMLElement;
        element.classList.add('active');
    })}
</script>
```

Outputs
```html
<script>
    const element = document.getElementById('test');
    element.classList.add('active');
</script>
```

TypeScript can also be transpiled within an element attribute using `transpileAttribute`.

```tsx
import { transpileAttribute } from '@triptease/html-jsx';

<input onchange={transpileAttr((event: Event) => console.log((event.target as HTMLInputElement).value))} />
```

Outputs
```html
<input onchange="console.log(event.target.value);">
```


### Extend with Custom Elements

Define custom elements by extending the JSX.IntrinsicElements interface.

```tsx
declare module '@triptease/html-jsx' {
  namespace JSX {
    interface IntrinsicElements {
      'some-custom-element': {
        someAttribute: string;
        children?: Children;
      };
    }
  }
}

<some-custom-element someAttribute="data">Foo</some-custom-element>
```