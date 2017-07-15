# tk-webpack-redux
Boilerplate for React applications with Webpack.
Suited for my own needs to get up and running.

## Features

* `yarn`
* ES6, React
* Testing (via `enzyme` and `jest`)
* Linter included
* `pre-commit` runs linter and tests automatically on commit
* Webpack and Dev Server with hot reload

## Organization

    |-- app
        |-- components // Contains React components
        |-- stylesheets // Contains CSS / LESS / SASS
    |-- index.js // Entrypoint for app
    |-- assets.js // Entrypoints for stylesheets and assets

Webpack is configures to generate two bundles: `app.bundle.js` and
`assets.bundle.js`. To speed up loading time of the app,
the assets bundle is included in the header of `index.html`.

Assets should **NOT** be included within the application code,
but rather be required by `app/assets.js`. This makes the test
setup easier and allows for separation of styling and logic.

If you want to include images, fonts etc, create `app/assets` and
an npm task like

    "copy:assets": "mkdir -p dist && cp app/assets dist/assets"

## NPM tasks

By default, there are several tasks you can run to do the most common tasks in
development. Run `npm install` first, then you can do `npm run <task>` where
`task` is one of:

* `clean`: Removes generated files
* `test` Run tests with Jest (must be called `Component.spec.js`)
* `test:watch` Run tests in watch mode
* `test:coverage` Determine test coverage
* `lint` Run ESLint on files in `app`
* `bundle:dist` Bundle and compile scripts to final bundle
* `bundle:dev` Run development server
* `bundle:profile` Run the Webpack profiler. Creates `build-stats.json` which can be uploaded to the [webpack stats analyzer](https://webpack.github.io/analyse/)

## Notes

### Useful libraries

Some libraries that might be useful but are not included:

* `Immutable.js` and `redux-immutable` for larger apps
* `redux` for more complex apps with state management
* `react-bootstrap` for layout using bootstrap (woff and ttf loaders for fonts and glyphicons are included!)
* `react-vis` for plots
* `axios` for AJAX
* `lodash` for utilities
