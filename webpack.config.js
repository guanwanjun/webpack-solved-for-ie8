var path = require('path');
const webpack = require('webpack'); //访问内置的插件

module.exports = {
  entry: __dirname + '/test.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath:  '/dist/',
    filename: 'a.bundle.js',
    chunkFilename: '[name].bundle.js'
  },
   plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,//if you want to see uglifyjs warnings, you need to set compress.warnings to true
            screw_ie8 : false
        },
        mangle: {
            screw_ie8: false
        },
        output: { screw_ie8: false }
      })
  ]
};