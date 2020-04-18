

'use strict';

const Controller = require('egg');

function resultsData(res,data=[]){
    res.forEach(item=>{

        let index = data.findIndex(j=>j.fatherKey === item.fatherKey)
        if(index!==-1){
            data[index].sub.push({
                routeKey:item.routeKey,
                name: item.name,
                to: item.to,
                isShow: item.isShow
                })
            return 
        }
        data.push({
            fatherName:item.fatherName ,
            fatherKey:item.fatherKey,
            fatherIcon:item.fatherIcon,
            sub:[{
                routeKey:item.routeKey,
                name: item.name,
                to: item.to,
                isShow: item.isShow
                }   
            ]
            
            
        })
   })
    return data
}


class TabController extends Controller.Controller {
  async index() {
      
    let res = await this.ctx.service.tab.index()

    //读出角色
    let roleres = await this.ctx.service.role.index()
    
    //记录当前用户有哪些菜单
    let queenArr = []
    roleres.forEach(item=>queenArr.push(item.tab_queen))

    //筛选出符合条件的数据
    let newres = []

    newres = res.filter(item=>queenArr.some(k=>parseInt(k)===item.routeKey))


    this.ctx.body = {code:0,data:resultsData(newres)}
  }
}

module.exports = TabController;
