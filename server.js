var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var config2 = {
  publicPath: config.output.path,
  hot: true,
  historyApiFallback: true
}

console.log(config2);
new WebpackDevServer(webpack(config), config2).listen(8080, 'localhost');
