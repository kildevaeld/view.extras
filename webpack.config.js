const Path = require('path');
const webpack = require('webpack');


const babelOptions = {
    "presets": [
        [
            "es2015",
            {
                "modules": false
            }
        ],
        "es2016"
    ]
};

module.exports = {
    entry: './src/index.ts',
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            debug: process.cwd() + "/node_modules/debug/src/browser.js"
        }
    },
    output: {
        filename: 'view.extras.js',
        path: Path.join(process.cwd(), 'dist'),
        library: ['view', 'extras'],
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: [{
                    loader: 'babel-loader',
                    options: babelOptions
                },
                {
                    loader: 'ts-loader',
                    options: {
                        compilerOptions: {
                            declaration: false
                        }
                    }
                }
            ]
        }, {
            test: /\.js$/,
            //exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: babelOptions
            }]
        }]
    },
    externals: {
        view: 'view'
    },
    node: {
        console: false,
        global: false,
        process: false,
        __filename: "mock",
        __dirname: "mock",
        Buffer: false,
        setImmediate: false
    }
}