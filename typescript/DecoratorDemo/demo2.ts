import { Get, Post, initRouter } from "./router"

class UserController {

  @Get('user/info')
  info() {
    console.log('get user info')
  }

  @Post('user/update')
  update() {
    console.log('update user info')
  }

}


initRouter()
// Node 运行