const mysql = require('mysql')
const connection = mysql.createConnection({
    host         :'localhost',
    user         :'root',
    password     :'rootroot',
    database     :'zhongxue'
})

connection.connect();

module.exports = (search) =>{
    return new Promise(res=>{
        connection.query(search,(err,results)=>{
            if(err) throw err ;
            res(results)  
        })  
    })
}








