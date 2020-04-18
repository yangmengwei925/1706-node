const sq         = require('../mysql');
const returnData = require('../until')

//更改输出的数据格式函数
let printTab = (arr,data=[]) =>{
    arr.forEach(i=>{
        //先判断data里是否已经存在相同的一级菜单
        let index = data.findIndex(j=>j.fatherName === i.fatherName)
    
        //已经含有一级菜单
        if(index!==-1){
            data[index].sub.push({
                name:i.name,
                routeKey:i.routeKey,
                to:i.to
            })
            return
        }
        
        //没有一级菜单
        data.push({
            fatherName:i.fatherName,
            fatherKey:i.fatherKey,
            fatherIcon:i.fatherIcon,
            sub:[
                {
                    name:i.name,
                    routeKey:i.routeKey,
                    to:i.to
                }
            ]
        }) 
    })
    return data
}

module.exports = async (ctx,next)=>{
    //拿到前端传递的用户角色
    const {role} = ctx.request.body

    //角色对应能看到的菜单
    let results  = await sq(`SELECT * FROM role where roleName='${role}'`)
    let tab      = await sq('SELECT * FROM tab')

    //过滤掉权限为no的菜单
    let newArr   = tab.filter(i=>results[0][i.routeKey]==='yes')

    ctx.body =returnData(0,'success',printTab(newArr))


}