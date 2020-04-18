安装包 npm install 
卸载包 npm uninstall 
查找包 npm search
更新包 npm update

初始化一个包 npm init
 
查询包地址 npm config get registry 
set包地址  npm config set registry 淘宝镜像

创建一个npm 账号  npm adduser 
密码             大小字母&&数字&&字符>10
登录             npm login
发布             进到package.json所在目录
发布             npm publish

package.json下
   script  自定义项目启动指令
   bin     接收一个对象 设置自定义指令

将npm模块链接到对应的运行项目中去 npm link 

获取当前操作文件夹路径 process.cwd()
获取自定义指令 后跟的内容 process.argv
 
