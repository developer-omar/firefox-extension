# Firefox Extension Template

This template contains the following technologies:

1. pnpm
2. Webpack 5
3. React 18
4. Typescript
5. SASS

## Settings

Change the value of `const extensionName` to the name of its extension, to create a directory with the same name, by default the value is `example-extension`

## Installation

1. Clone the repository
2. Run `pnpm install` for install dependencies
3. Run `pnpm dev` for developing
4. Run `pnpm build` for production

## Test extension in Firefox

1. Open the `about:debugging` page
2. Click the This Firefox option
3. click the Load Temporary Add-on button, then select any file in your extension's directory
