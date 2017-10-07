# tk-webpack-kickstart

Boilerplate for React applications with Webpack. Suited for my own needs to get up and running.

## Features

* `yarn`
* ES6, React
* Testing (via `enzyme` and `jest`)
* Linter included
* `husky` runs linter and tests automatically before push
* Webpack and Dev Server with hot reload

## Getting started

Make sure to have `yarn` and a recent version of `node.js` and `npm`
installed.

To get started, run the following

    git clone git@github.com:teekaay/tk-webpack-kickstart.git my-app
    cd my-app
    rm -rf .git && git init
    yarn install
    npm run bundle:dev

Edit `app/components/App.js` and get started! You may also want to activate `npm
run test:watch` to get immediate feedback and develop in a TDD fashion.

## Notes

### Useful libraries

Some libraries that might be useful but are not included:

* `Immutable.js` and `redux-immutable` for larger apps
* `redux` for more complex apps with state management
* `react-bootstrap` for layout using bootstrap (woff and ttf loaders for fonts and glyphicons are included!)
* `react-vis` for plots
* `axios` for AJAX
* `lodash` for utilities
