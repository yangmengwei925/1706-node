const http = require('http')
const fs  = require('fs')

http.createServer((req,res)=>{
    let page = fs.readFileSync('./index.html','utf-8')
    res.end(page)
}).listen(3000)