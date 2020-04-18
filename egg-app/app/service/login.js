const Service = require('egg').Service;

class LoginService extends Service {
  async index() {
    const {ctx,app} = this
    return await app.mysql.select('user',{where:{user:ctx.request.body.user}})
  }
  
}

module.exports = LoginService;