const {resolve} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        './src/pages/novel.js'
    ],
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {loader: 'css-loader', options: {importLoaders: 1}},
                    {loader: 'less-loader', options: {strictMath: true, noIeCompat: true}}
                ]
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // 开启全局的模块热替换（HMR）
        new webpack.NamedModulesPlugin()
        // 当模块热替换（HMR）时在浏览器控制台输出对用户更友好的模块名字信息
        // new UglifyJSPlugin()
    ]
};