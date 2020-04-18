'use strict';

const Controller = require('egg').Controller;

class RegisterController extends Controller {
  async register() {
    const { ctx } = this;
    const {user,pwd,role} = ctx.request.body

    //后台校验非空
    if(user === ''){
      ctx.body  = {code:1,msg:'用户名不能为空'};
      return
    }
    if(pwd === ''){
      ctx.body  = {code:1,msg:'密码不能为空'};
      return
    }

    //连接数据库检查用户名是否重复
    let results = await ctx.service.register.index(user)
    if(results.length > 0){
      ctx.body  = {code:1,msg:'账户已存在，更换用户名'};
      return
    }
    //连接数据库执行插入
    await ctx.service.register.register(user,pwd,role)
    
    //返回结果
    ctx.body  = {code:0,msg:'注册成功'};
  }
}

module.exports = RegisterController;
