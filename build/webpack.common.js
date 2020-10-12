const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const config = require('../config');

module.exports = {
  entry: {
    app: './packages/index.js'
  },
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: '/dist/',
    filename: 'vmap-ui.common.js',
    chunkFilename: '[id].js',
    libraryExport: 'default',
    library: 'vmapui',
    libraryTarget: 'commonjs2'
  },
  externals: {
    vue: 'vue'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: ['node_modules']
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin()
  ]
};
