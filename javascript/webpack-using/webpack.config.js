'use strict'
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const ENV = process.env.NODE_ENV ?? 'development'

function resolve(dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  mode: ENV,
  entry: {
    app: resolve('./src/app.ts')
  },
  output: {
    path: resolve('dist'),
    filename: '[name]_[hash:8].js'
  },
  resolve: {
    alias: {
      '@': resolve('src')
    },
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['babel-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['app'],
      filename: (entry) => {
        return `${entry}.html`
      },
      template: resolve('./public/index.html')
    })
  ]
}
