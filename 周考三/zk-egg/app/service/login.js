const Service = require('egg').Service;

class LoginService extends Service {
  //登录验证
  async list() {
    return await this.app.mysql.select('user',{where:{user:this.ctx.request.body.user}})
  }

  //获取最新用户数据
  async get(){
    return await this.app.mysql.select('user',{where:{userid:this.ctx.sessionInfo.userid}})
  }
  //编辑当前信息
  async edit() {
    const {email,birthday,address,signs,sex,userid}   = this.ctx.request.body
    console
    return await this.app.mysql.update('user',{email,birthday,address,signs,sex},{where: {userid}})
  
  }
}

module.exports = LoginService;