'use strict'
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const ENV = process.env.NODE_ENV ?? 'development'

const port = parseInt(process.env.PORT ?? 8000)

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
    filename: '[name]_[contenthash:8].js'
  },
  devServer: {
    contentBase: resolve('public'),
    port,
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
        test: /\.(ts|js)$/,
        use: ['babel-loader?cacheDirectory'],
        // 只命中src目录里的ts文件
        include: resolve('src')
      },
    ]
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['ts', 'js']
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['app'],
      filename: (entry) => {
        return `${entry}.html`
      },
      template: resolve('./public/index.html')
    })
  ]
}
