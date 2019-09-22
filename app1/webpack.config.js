var path = require('path');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const appName = 'app1';

module.exports = {
  entry : {
    [appName]: './index.js',
  },
  output : {
    filename: 'index.js',
    path : path.resolve(__dirname , 'build'),
    library: appName,
    libraryTarget: 'var',
  },
  module : {
    rules : [
      {test : /\.(js)$/, use:'babel-loader'},
      {test : /\.css$/, use:['style-loader', 'css-loader']},
    ]
  },
  mode:'development',
  plugins : [
    // new CleanWebpackPlugin(),
  ],
}
