# html-jsx: Typed HTML templates using JSX

Generate static HTML from JSX/TSX templates. The perfect solution to server side rendering of HTML, more performant than
template engines with type checking for HTML.

This is a mono repository that contains packages used to build and test html-jsx. If you are interested in the published 
packages, see the [src](src) package.

The other packages are:

- [generate](generate) - Generates HTML types from the WHATWG Living Standard  
- [test](test) - Tests the JSX runtime

# Development

No surprises here.

```shell
nvm install --lts
corepack enable
pnmp install
pnpm run build
```