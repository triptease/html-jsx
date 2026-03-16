# html-jsx: Typed HTML templates using JSX

Generate static HTML from JSX/TSX templates. The perfect solution to server side rendering of HTML, more performant than
template engines with type checking for HTML.

## Why use html-jsx?

- Faster than traditional template engines since most of the work is done by the TypeScript compiler.
- Type checking for HTML using type definitions generated from the WHATWG Living Standard.
- It's secure. Escaping of tag contents and attributes to avoid XSS attacks.
- Validation of HTML structure using WHATWG content categories.

## Getting started

Add the package as a dev dependency
```shell
npm add -D @triptease/html-jsx
```

Add the JSX configuration into the compiler options in `tsconfig.json`
```json
{
  "compilerOptions": {
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

// TS2339: Property h7 does not exist on type JSX.IntrinsicElements
```

**Invalid HTML attributes are caught at compile time**

```tsx
<div classs="my-class"></div>

// TS2322: Type { classs: string; } is not assignable to type HtmlTagDiv
// Property 'classs' does not exist on type HtmlTagDiv. Did you mean 'class'?
```

**HTML attributes are type-checked**

```tsx
<input required="falsey"></input>

// TS2820: Type 'falsey' is not assignable to type BooleanAttribute | undefined. Did you mean 'false'?
```


### Structural HTML validation

Validation of HTML structure using the WHATWG content categories is applied at runtime when NODE_ENV is set to `development`.

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

<div>{content}</div> // Outputs <div>&lt;script&gt;arbitraryCode()&lt;&#x2F;script&gt</div>;
<div>{raw(content)}</div> // Outputs <div><script>arbitraryCode()</script></div>
```

Attribute escaping can also be disabled

```tsx
import { raw } from '@triptease/html-jsx';

<hr data-x={raw('&')} /> // Outputs <hr data-x="&" />
<hr data-x={'&'} /> // Outputs <hr data-x="&amp;amp" />
```


### Inline Javascript

Embed TypeScript/JavaScript directly in your templates as real functions instead of strings. This means you get
full IDE support — autocompletion, type checking, and refactoring — for your inline scripts and event handlers.

Use `js()` to embed JavaScript inside `<script>` tags:

```tsx
import { js } from '@triptease/html-jsx';

const fn = () => console.log('embedded JS');

<script>{js(fn)}</script>
// Outputs <script>console.log("embedded JS")</script>
```

Use `jsAttr()` to embed JavaScript in event handler attributes:

```tsx
import { jsAttr } from '@triptease/html-jsx';

const fn = () => console.log('embedded JS');

<div onclick={jsAttr(fn)}></div>
// Outputs <div onclick="console.log(&quot;embedded JS&quot;)"></div>
```

Pass data from the server to the client using the `args` parameter. The data is serialized as JSON and
made available to the function body via the `args` object:

```tsx
import { js } from '@triptease/html-jsx';

<script>{js((args) => console.log(args.foo), { foo: 'bar' })}</script>
// Outputs <script>const args = JSON.parse("{\"foo\":\"bar\"}");
// console.log(args.foo)</script>
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