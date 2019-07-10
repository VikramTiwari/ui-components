This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app as an npm package to the `dist` folder.<br>

## Deploy to NPM

- [Guide from NPM on how to publish an org scoped package](https://docs.npmjs.com/creating-and-publishing-an-org-scoped-package)

```bash
npm init --scope=ivikramtiwari
npm publish --access public
```

## Usage

### Installation

```bash
# install using npm
yarn add @ivikramtiwari/ui-components --save
```

### Import in files

```js
import { Button } from '@ivikramtiwari/ui-components'
```

## TODO

- Add Storybook
