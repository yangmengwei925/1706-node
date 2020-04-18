#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const zhongxueJs = fs.readFileSync(path.join(__dirname,'/zhongxue.js'),'utf-8')
fs.writeFileSync(path.join(process.cwd(),'/',process.argv[2]+'.js'),zhongxueJs,'utf-8')




