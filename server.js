/**
 * Created by pan on 2017/7/3.
 */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.dev');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(8080, 'localhost', function (err, result) {
    console.log(123)
    if (err) {
        return console.log(err);
    }
    
    console.log('Listening at http://localhost:8080/');
});