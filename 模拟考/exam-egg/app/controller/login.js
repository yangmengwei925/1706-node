'use strict';

const Controller = require('egg').Controller;
const jwt        = require('jsonwebtoken')

class LoginController extends Controller {
  async login() {
    const { ctx } = this;
    const { user,pwd } = ctx.request.body

    //后台校验非空
    if(user === ''){
      ctx.body  = {code:1,msg:'用户名不能为空'};
      return
    }
    if(pwd === ''){
      ctx.body  = {code:1,msg:'密码不能为空'};
      return
    }

    //使唤service 去连接数据库
    let res = await ctx.service.login.login(user)
    
    //依据数据库返回的数据做判断
    if(res.length===0){
      ctx.body = {code:1,msg:'账户未注册'};
      return 
    }
    if(res[0].pwd !== pwd){
      ctx.body = {code:1,msg:'密码错误'};
      return 
    } 

    //生成token
    let token = jwt.sign({...res[0]},this.config.keys)
    //返回结果及token
    ctx.body  = {code:0,msg:'登录成功',data:{token}};
  }
}

module.exports = LoginController;
