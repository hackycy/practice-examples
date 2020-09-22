'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    app.quene.add({ info: 'aaa' });
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
