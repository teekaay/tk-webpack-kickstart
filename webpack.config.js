// # Optimization hints:
//
// https://engineering.bitnami.com/articles/optimizing-your-webpack-builds.html
// http://engineering.invisionapp.com/post/optimizing-webpack/

const path = require('path');
const webpack = require('webpack');
const package = require('./package.json');

// Configuration
const buildDir = path.resolve('./dist');
const srcDir = path.resolve('./app');
const isProduction = process.env.NODE_ENV === 'production';

const config = {
    entry: {
        app: [
            path.join(srcDir, 'index.js')
        ],
        assets: [
            path.join(srcDir, 'assets.js'),
        ],
    },
    output: {
        path: buildDir,
        filename: '[name].bundle.js',
        publicPath: '/dist/',
    },
    resolve: {
        extensions: ['.js'],
    },
    devtool: isProduction ? 'cheap-source-map' : 'cheap-module-eval-source-map',
    cache: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    srcDir,
                ],
                use: [
                    {
                        loader: 'react-hot-loader',
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
                            presets: package.babel.presets,
                            cacheDirectory: true,
                        },
                    },
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ]
            },
            {
                test: /\.woff2?/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            mimetype: 'application/font-woff',
                        }
                    },
                ],
            },
            {
                test: /\.(otf2|ttf|eot|svg|png)/,
                use: [
                    { loader: 'file-loader' }
                ]
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    devServer: {
        port: process.env.PORT || 8080,
        proxy: {

        },
    },
};

if(isProduction) {
    config.plugins.push(new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
    }));
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
            screw_ie8: true,
            keep_fnames: true,
        },
        compress:  {
            screw_ie8: true,
        },
        comments: false,
    }));
} else {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = config;
