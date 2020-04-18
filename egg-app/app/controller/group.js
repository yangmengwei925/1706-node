'use strict';

const Controller = require('egg');
const typeOpr    = require('../until')
class GroupController extends Controller.Controller {
  
  async list() {
    const { ctx } = this;
    let data = await this.service.group.list()
    ctx.body = {code:0,msg:'登录成功',data};
  }

  async add() {
    const { ctx } = this;
    //获取一个添加结果

    let results = await that.service.opr.list();
    if(!results.some(item=>item.type === 'add')){       
        that.ctx.body = {code:333,msg:'您无权进行添加'}
        return 
    }

    await this.service.group.add()
    ctx.body = {code:0,msg:'添加成功'};
 
  }

  async edit() {
    const { ctx } = this;
    
    let results = await that.service.opr.list();
    if(!results.some(item=>item.type === 'edit')){       
        that.ctx.body = {code:333,msg:'您无权进行编辑'}
        return 
    }

    //获取一个添加结果
    await ctx.service.group.edit()
    ctx.body = {code:0,msg:'编辑成功'};

  }

  async delete(){
    const { ctx } = this;

    let results = await that.service.opr.list();
    if(!results.some(item=>item.type === 'delete')){       
        that.ctx.body = {code:333,msg:'您无权进行编辑'}
        return 
    }

 
    //获取一个添加结果

    let list = await ctx.service.group.list()
    await ctx.service.group.delete()
    ctx.body = {code:0,msg:'删除成功',data:list};

  }


  async search(){
    const { ctx } = this;
    const {realname}  = ctx.request.body
    //模糊搜索
    let data = await this.service.group.list()
    let res = data.filter(item=>item.realname.includes(realname))
    ctx.body= {coede:0,msg:'成功',data:res}
  }
}

module.exports = GroupController;
