const ws  = require('ws')
const webSocketServe = new ws.Server({port:8888})
let socketArr = []

webSocketServe.on('connection',socket=>{
    socketArr.push(socket)
    socket.on('message',data=>{
        socketArr.filter(item=>item!==socket).forEach(j=>j.send(data))
    })
    socket.on('close',()=>{
        let index = socketArr.findIndex(item=>item===socket)
        if(index!==-1){
            socketArr.splice(index,1)
        }
    })
})