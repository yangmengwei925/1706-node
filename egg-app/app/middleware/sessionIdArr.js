const url        = require('url')

module.exports = options => {
    return async function(ctx,next){

        if(url.parse(ctx.url).pathname === '/login/login'){
            console.log(ctx.request.body.user+'登录')
            await next()
            return 
        }

        const sessionID = ctx.get('sessionID')
        if(!sessionID){
            ctx.body= {code:444,msg:'没有权限，请登录'}
            return
        }

        if(!Object.keys(options).some(item=>item===sessionID)){
            ctx.body= {code:444,msg:'权限验证失败'}
            return
        }

        ctx.sessionInfo = options[sessionID]
        await next()
    }
}