var path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
  entry : './src/index.tsx',
  plugins : [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['public/build']
    }),
    new HtmlWebpackPlugin ({
      template : './public/index.html'
    })
  ],
  output : {
    path : path.resolve(__dirname , '/public'),
    filename: 'build/[name].[contenthash].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module : {
      rules : [
          {test : /\.(js)$/, use:'babel-loader'},
          {test : /\.css$/, use:['style-loader', 'css-loader']},
    {
              test: /\.less$/,
              use: [
                {
                  loader: 'style-loader', // creates style nodes from JS strings
                },
        {
                  loader: 'css-loader', // translates CSS into CommonJS
        },
                {
                  loader: 'less-loader', // compiles Less to CSS
                },
              ],
            },
            { test: /\.tsx?$/, loader: 'ts-loader' }
      ]
  },
    // mode:'development',

}