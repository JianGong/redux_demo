var path = require('path');
var koa = require('koa');
var server = require('koa-static');
var webpack = require('webpack')
var config = require('./webpack.config');

var app = koa();
var compiler = webpack(config);

app.use(server('./'));

app.use(require('koa-webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(function* (next) {
  yield require("webpack-hot-middleware")(compiler).bind(null, this.req, this.res);
  yield next;
});

app.listen(3000);
