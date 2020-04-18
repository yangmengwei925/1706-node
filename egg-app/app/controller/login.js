'use strict';

const Controller = require('egg');
const jwt        = require('jsonwebtoken')

class LoginController extends Controller.Controller {
  async index() {
    const { ctx } = this;
    const { pwd } = ctx.request.body

    //使唤service 去连接数据库
    let res = await ctx.service.login.index()
    
    //根据service 返回的数据 做判断
    if(res.length===0){
     
      ctx.body = {code:1,msg:'账户未注册'};
      return 
    }
    if(res[0].pass !== pwd){
      ctx.body = {code:1,msg:'密码错误'};
      return 
    }
    
    let token = jwt.sign({...res[0]},this.config.keys)

    let sessionID = res[0].user+new Date().getTime();
    this.config.sessionIdArr[sessionID] = res[0]
    
    ctx.body  = {code:0,msg:'登录成功',data:{token,sessionID,realname:res[0].realname}};
    
   
  }
}

module.exports = LoginController;
