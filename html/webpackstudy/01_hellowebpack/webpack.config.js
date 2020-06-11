const path = require('path');
module.exports = {

    entry: {
        main: './main.js'
    },
    output: {
        filename: 'build.js',
        path: path.resolve('./')
    },
    watch:true

}