# tk-webpack-redux
Boilerplate for React applications with Webpack.
Suited for my own needs to get up and running.

## Features

* Example application already set up 
* webpack configuration for `development` (default) and `production` in `/config`
* webpack-dev-server with hot reload
* webpack-loader for css, files and less
* linter (ESlint) with react-plugins
* ES6 with babel
* tests with `Jest`
* npm tasks for linting, testing, development and bundle

## NPM tasks

By default, there are several tasks you can run to do the most common tasks in 
development. Run `npm install` first, then you can do `npm run <task>` where
`task` is one of:

* `test` Run tests with Jest (must be in a folder called `__tests__` (can be overridden)
* `test:watch` Run tests in watch mode
* `lint` Run ESLint on files in `src`
* `bundle` Bundle and compile scripts
* `bundle:watch` Run development server
* `bundle:profile` Run the Webpack profiler. Creates `stats.json` which can be uploaded to the [webpack stats analyzer](https://webpack.github.io/analyse/)

## Notes

### NODE_ENV

If a production build is executed, the environment is
automatically set to `production`.

### Useful libraries

Some libraries that might be useful but are not included:

* `Immutable.js` and `redux-immutable` for larger apps
* `redux` for more complex apps
* `react-bootstrap` for layout using bootstrap (woff and ttf loaders for fonts and glyphicons are included!)
* `react-vis` for plots
* `axios` for AJAX + promises
* `lodash` for utilities 
