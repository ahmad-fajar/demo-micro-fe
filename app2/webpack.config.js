var path = require('path');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const appName = 'app2';

module.exports = {
  entry : {
    [appName]: './index.js',
  },
  output : {
    filename: `${appName}.js`,
    path : path.resolve(__dirname , 'build'),
    library: appName,
    libraryTarget: 'amd',
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
