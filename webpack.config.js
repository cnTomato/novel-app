var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                    // plugins: ["transform-decorators-legacy"]
                }
            },
            {test: /\.css$/, use: 'css-loader'},
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {loader: 'css-loader', options: {importLoaders: 1}},
                    'less-loader'
                ]
            },
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=100000'}
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        // new webpack.ProvidePlugin({
        //     Promise: 'exports?global.Promise!es6-promise',
        //     fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        // }),
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': '"DEV"'
        // }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};