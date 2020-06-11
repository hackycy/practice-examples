const express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
})
.all('*', (req, res) => {
  res.send('地址有误，去<a href="/">首页</a>看看吧');
});

app.use((err, req, res, next) => {
  console.log(err);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});