const Service = require('egg').Service;

class RegisterService extends Service {
  async index(user) {
    return await this.app.mysql.select('user',{where:{user}})
  }
  async register(user,pwd,role) {
    return await this.app.mysql.insert('user',{user,pwd,role,userid:null})
  }
  
}

module.exports = RegisterService;