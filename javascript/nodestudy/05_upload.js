const express = require('express');
const formidable = require('formidable');
const path = require('path');

let server = express();

server.engine('.html', require('express-art-template'));

server.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});
// views：模板文件所在目录。例如：app.set('views', './views')
server.set('views', './views');
// view engine：要使用的模板引擎。例如：app.set('view engine', 'pug')
server.set('view engine', '.html');

let heros = [
    {
        name: "zhangsan",
        url: "http://ww1.sinaimg.cn/thumbnail/006oXysjgy1g2v4re58bmj31hc0u03zq.jpg"
    }
];

server.get('/', function(req, res) {

    res.render('index', {
        heros
    });

});

let route = express.Router();

route.post('/add', function(req, res) {
    
    let form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.uploadDir = path.join(__dirname, '/imgs/');
    form.keepExtensions = true;
    form.parse(req, function(err, fields, files) {
        
        if(!err) {
            // console.log(files);
            let url = 'imgs/' + path.parse(files.img.path).base;
            let name = fields.name;
            heros.push({
                name,
                url
            });
            res.redirect('/');
        }

    });

});

server.use('/imgs', express.static('./imgs'));

server.use(route);

server.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});