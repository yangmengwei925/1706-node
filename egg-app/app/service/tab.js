const Service = require('egg').Service;

class TabService extends Service {

  async index() {
    return await this.app.mysql.select('tab')
  }
  
}

module.exports = TabService;