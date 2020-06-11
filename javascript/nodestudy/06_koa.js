const koa = require('koa');

let server = new koa();

server.use(async (ctx) => {
    ctx.body = 'hello world';
});

server.listen(3000, ()=> {
    console.log('listen 3000 is run');
});