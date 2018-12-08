const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});
const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = { // eslint-disable-line
  optimization: {
    minimizer: [
      new MinifyPlugin()
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            plugins: ['transform-object-rest-spread']
          }
        }

      }
    ]
  },
  devtool: 'source-map',
  plugins: [htmlPlugin]
};
