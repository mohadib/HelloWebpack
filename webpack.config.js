var path = require('path');
var webpack = require('webpack')

module.exports = {
   devtool: 'sourcemap' ,
   entry: './src/index.js',
   output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
   },
   module: {
      loaders: [{
            test: /\.js$/,
            loader: ['babel-loader'],
            exclude: '/node_modules/'
      }]
   },
   plugins: [
      new webpack.optimize.UglifyJsPlugin({ mangle: false, sourceMap: true })
   ]
};