const {resolve} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './pages/index.js',
        './pages/searchResult.js',
        './pages/source.js',
        './pages/category.js',
        './pages/chapter.js',
        './pages/cat.js',
    ],
    output: {
        path: resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/',
        chunkFilename: "[id].chunk.js"
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        contentBase: resolve(__dirname, 'dist'),
        inline: true,
        port: 8000,
    },
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
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {loader: 'css-loader', options: {importLoaders: 1}},
                    'less-loader'
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
        new webpack.NamedModulesPlugin(),
        // 当模块热替换（HMR）时在浏览器控制台输出对用户更友好的模块名字信息
        new HtmlWebpackPlugin({
            title: 'template',
            template: './template/index.html',
            filename: './dist/index.html',
            inject: 'body',
            hash: true,
            chunks: ['vendors', 'index'],
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new HtmlWebpackPlugin({
            title: 'template',
            template: './template/searchResult.html',
            filename: './dist/searchResult.html',
            inject: 'body',
            hash: true,
            chunks: ['vendors', 'searchResult'],
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new HtmlWebpackPlugin({
            title: 'template',
            template: './template/source.html',
            filename: './dist/source.html',
            inject: 'body',
            hash: true,
            chunks: ['vendors', 'source'],
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new HtmlWebpackPlugin({
            title: 'template',
            template: './template/category.html',
            filename: './dist/category.html',
            inject: 'body',
            hash: true,
            chunks: ['vendors', 'category'],
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new HtmlWebpackPlugin({
            title: 'template',
            template: './template/chapter.html',
            filename: './dist/chapter.html',
            inject: 'body',
            hash: true,
            chunks: ['vendors', 'chapter'],
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new HtmlWebpackPlugin({
            title: 'template',
            template: './template/cat.html',
            filename: './dist/cat.html',
            inject: 'body',
            hash: true,
            chunks: ['vendors', 'cat'],
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        })
    ]
};