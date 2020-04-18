const Service = require('egg').Service;

class OprService extends Service {
  async index(role) {
    return await this.app.mysql.select('operate',{where:{role}})
  }
}

module.exports = OprService;