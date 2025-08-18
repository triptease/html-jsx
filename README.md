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

# Releasing new versions

You must have access to the Triptease npm account to do this.

Only the src package is published, and the process is manual for now.

1. Update the version in package.json removing the `-dev` suffix and changing the minor or major versions if required.
2. Commit and push the changes
3. From src, run `npm publish`
4. Bump the version in package.json to the next patch version and add the `-dev` suffix 
5. Commit and push the changes