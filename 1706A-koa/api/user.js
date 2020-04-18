const sq         = require('../mysql');
const returnData = require('../until')


module.exports = async (ctx,next)=>{

    const {user,pass,phone,sex,realname,isDog,age,role}  = ctx.request.body
    let data = await sq(`INSERT INTO user VALUES('${user}','${pass}',null,'${phone}','${sex}','${realname}','${isDog}','${age}','${role}')`)

    if(data.insertId!==undefined){
        ctx.body = returnData(0,'添加成功')
    }
}