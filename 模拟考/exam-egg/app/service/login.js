const Service = require('egg').Service;

class LoginService extends Service {
  async login(user) {
    return await this.app.mysql.select('user',{where:{user}})
  }
  
}

module.exports = LoginService;