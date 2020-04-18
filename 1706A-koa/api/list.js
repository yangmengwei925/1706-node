const sq         = require('../mysql');
const returnData = require('../until')


module.exports = async (ctx,next)=>{
    let data = await sq('SELECT * FROM user')
    ctx.body = returnData(0,'success',data)
}