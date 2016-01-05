var path = require('path');
var webpack = require('webpack');

module.exports = {
  // This generates source maps so you can debug your source code in the browser rather than the babel nonsense
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    // *** may be "only" instead?
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    // the [name] is a convention, takes the filename of the entry (i think)
    filename: 'mainx.js',
    path: path.join(__dirname, 'public'),
    publicPath: '/public/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { // Babel loader to support react and 'es2015' (which is es6).  This is different than the tutorial, see: 
        //  http://stackoverflow.com/questions/33460420/babel-loader-jsx-syntaxerror-unexpected-token
        test: /\.js[x]?$/, 
        include: path.join(__dirname, 'src'),
        // This executes in the pipeline from right to left for some reason.  Just keep it in mind.  Babel first, then react-hot.
        loaders: ['react-hot', 'babel']     
      }
    ]
  }
}