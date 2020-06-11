const path = require('path');

module.exports = {

    entry: {
        index: './src/main.js'
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'build.js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.(jpeg|png|gif|svg|jpg)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }

}