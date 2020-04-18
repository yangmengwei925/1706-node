const search = require('../mysql')

module.exports = async (ctx,next)=>{
    const ls   = await search(`select * from list`)
    ctx.body   = {code:0,msg:'success',data:ls}
}