import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    this.app.queue.task.add({ b: 'a' });
    ctx.body = 'success';
  }
}
