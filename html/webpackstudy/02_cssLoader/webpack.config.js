const path = require('path');

module.exports = {

    entry: {
        main: "./main.js"
    },
    output: {
        filename: "build.js",
        path: path.resolve(__dirname, './')
    },
    // 为了在 JavaScript 模块中 import 一个 CSS 文件
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }

}