const sq         = require('../mysql');
const returnData = require('../until')


module.exports = async (ctx,next)=>{
    const {userId} = ctx.request.body
    let res = await sq(`DELETE FROM user where userId='${userId}'`)
    if(res.insertId===0){
        let data = await sq(`SELECT * FROM user`)
        ctx.body = returnData(0,'删除成功',data)
    }
}