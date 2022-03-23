const HtmlWebPackPlugin = require('html-webpack-plugin');
const MinicssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

  mode: 'development',
  output:{
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          minimize: false,
          sources: true,
        },
        
      },
      {
        test: /\.css$/i,
        exclude: /styles\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /styles\.css$/,
        use: [
          MinicssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.png/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name][file]', 
        }
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
      inject: true,
    }),

    new MinicssExtractPlugin({
      filename: '[name].css',
      ignoreOrder: false
    }),
  ]

}