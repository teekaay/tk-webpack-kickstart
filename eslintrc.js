module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        'max-len': [1, 120, 2, { ignoreComments: true }],
        'no-unused-vars': [1],
        'no-trailing-spaces': [2],
        // Temporarly
        'react/no-string-refs': [1],
        'react/no-danger-with-children': [1],
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    globals: {
        // Jest
        'it': true,
        'describe': true 
    },
};