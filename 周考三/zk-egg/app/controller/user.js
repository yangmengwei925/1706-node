'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    this.ctx.body = {code:0,msg:'',data:this.ctx.sessionInfo}
  }
  async edit() {

    let res = await this.ctx.service.login.edit()

    let data = await this.ctx.service.login.get()
    this.config.sessionIdArr[this.ctx.get('sessionId')] = {...data[0]}
    if(res.affectedRows === 1){
      this.ctx.body = {code:0,msg:'修改成功',data}
    }
    
  }
}

module.exports = UserController;