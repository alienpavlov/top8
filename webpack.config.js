"use strict";

const NODE_ENV = process.env.NODE_ENV || 'dev';
const webpack = require('webpack');

module.exports = {
    context: __dirname + '/src/js',
    entry: './app',
    output: {
        path: __dirname + '/public',
        filename: 'index.js',
        library: "main"
    },
    devtool: NODE_ENV === 'dev' ? 'source-map' : null,
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style!css!'
        }, {
            test: /\.js?$/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },

    devServer: {
        historyApiFallback: true
    },

    resolve: {
        modulesDerictorie: ['node_modules'],
        extenstions: ['', '.js']
    },

    resolveLoader: {
        modulesDerictories: ['node_modules'],
        modulesTemplates: ['*-loader'],
        extenstions: ['', '.js']
    },

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ]
};