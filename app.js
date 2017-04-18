const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.dev')
const app = new (require('express'))();
const port = 3001;
const express = require('express');

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.get("/index", function (req, res) {
    res.sendFile(__dirname + '/template/index.html')
});
app.get("/searchResult", function (req, res) {
    res.sendFile(__dirname + '/template/searchResult.html')
});
app.get("/source", function (req, res) {
    res.sendFile(__dirname + '/template/source.html')
});
app.get("/category", function (req, res) {
    res.sendFile(__dirname + '/template/category.html')
});

app.get("/chapter", function (req, res) {
    res.sendFile(__dirname + '/template/chapter.html')
});
app.get("/cat", function (req, res) {
    res.sendFile(__dirname + '/template/cat.html')
});


app.use(express.static(__dirname));

app.listen(port, function (error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
});
