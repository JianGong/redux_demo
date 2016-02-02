var path = require('path');
var webpack = require('webpack');

module.exports = {
  eval:'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/entry/index'
  ],
  output:{
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({compress:{warnings:false}}),
    new webpack.DefinePlugin({
      __DEBUG__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
    })
  ],
  module:{
    loaders:[{
      test: /\.(js|jsx)$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },{
      test: /\.css$/,
      loader:'style!css'
    }]
  }
}
