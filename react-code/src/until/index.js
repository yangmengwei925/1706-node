export function typeNull(obj){
    var tipArr = []
    Object.keys(obj).forEach(item=>{
        if(obj[item] === '') tipArr.push(item)  
    })
    //长度大于0一定有空元素 弹出去提提示 写内容
    if(tipArr.length>0){
        alert(tipArr[0]+'不能为空')
        return 
    }
}