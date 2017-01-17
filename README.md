# tk-webpack-redux
Boilerplate for React applications with Webpack and Redux.
Suited for my own needs to get up and running.

## Features

* Example application already set up (reducer, action, store, component, middleware) if you
forget how to implement something
* webpack configuration for `development` (default) and `production` in `/config`
* webpack-dev-server with hot reload
* webpack-loader for css, files and less
* linter (ESlint) with react-plugins
* ES6 with babel
* tests with Jest
* npm tasks for linting, testing, development and bundle
* react, redux, react-redux, redux-logger are included

## NPM tasks

By default, there are several tasks you can run to do the most common tasks in 
development. Run `npm install` first, then you can do `npm run <task>` where
`task` is one of:

* `test` Run tests with Jest (must be in a folder called `__tests__` (can be overridden)
* `test:watch` Run tests in watch mode
* `lint` Run ESLint on files in `src`
* `bundle:dist` Bundle all assets in `dist` (runs bundle:js and bundle:clean)
* `bundle:js` Bundle and compile scripts
* `bundle:clean` Clean generated files
* `bundle:profile` Run the Webpack profiler. Creates `stats.json` which can be uploaded to the [webpack stats analyzer](https://webpack.github.io/analyse/)

## Notes

### NODE_ENV

If a production build is executed (using `npm run bundle:js` or `npm run bundle:dist`), the environment is
automatically set to `production` which will remove development or debugger libraries such as redux-logger.
The environment can be checked even in the browser (through webpack.DefinePlugin).

### Useful libraries

Some libraries that might be useful but are not included:

* `Immutable.js` and `redux-immutable` for larger apps
* `redux-thunk` for async middleware
* `react-bootstrap` for layout using bootstrap (woff and ttf loaders for fonts and glyphicons are included!)
* `react-vis` for plots
* `react-promise` for Async component
* `axios` for AJAX + promises
* `lodash` for utilities 
