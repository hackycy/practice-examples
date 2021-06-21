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
    // 在导入语句没带文件后缀时，Webpack 会自动带上后缀后去尝试访问文件是否存在。 且优先命中ts
    extensions: ['.ts', '.js']
  },
  // 处理模块
  module: {
    // 配置loader
    rules: [
      {
        test: /\.ts$/,
        use: ['babel-loader?cacheDirectory'],
        // 只命中src目录里的ts文件
        include: resolve('src')
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