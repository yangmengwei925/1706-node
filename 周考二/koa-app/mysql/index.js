const mysql = require('mysql')
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'rootroot',
    database:'week'
})
connection.connect()

module.exports =search=>{
    return new Promise(res=>{
        connection.query(search,(err,results)=>{
            if(err) {
                alert('数据库查询错误')
                throw err
            }
            res(results)
        })
    })
}

