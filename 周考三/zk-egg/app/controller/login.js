'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
    const { ctx } = this;
    const {user,pwd} = ctx.request.body
    let res = await ctx.service.login.list()
    if(res.length===0){
        ctx.body = {code:1,msg:'账户未注册'}
        return
    }
    if(res[0].pwd !== pwd ){
      ctx.body = {code:1,msg:'密码错误'}
      return
    }
    let sessionId = user+new Date().getTime()

    this.config.sessionIdArr[sessionId] =res[0]
    
    ctx.body = {code:0,msg:'登录成功',data:{sessionId}}
  }
}

module.exports = LoginController;
