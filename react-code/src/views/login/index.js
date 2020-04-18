import React, { Component } from 'react'
import {Input,Button,Icon}  from 'antd'
import Backgrounds          from './bak'

class Login extends Component {
    loginIn=()=>{
        let submits_data = {
            user:this.refs.user.input.value,
            pwd:this.refs.pwd.input.value
        }

        if(submits_data.user===''){
            alert('账号不能为空')
            return
        }
    
        if(submits_data.pwd===''){
            alert('密码不能为空')
            return
        }
   

        submits_data.pwd = this.$md5(submits_data.pwd)
        console.log( submits_data.pwd)

        this.axios('post','/login/login',submits_data).then(data=>{
           if(data.data.code===0){
            localStorage.setItem('realname',data.data.data.realname)
            localStorage.setItem('token',data.data.data.token)
            localStorage.setItem('sessionID',data.data.data.sessionID)
            this.props.history.push('/home')

             return 
           }

           alert(data.data.msg)
        })
    }
    render() {
        return <div className="login">
                {/* 背景 */}
                <Backgrounds />

                {/* 登录窗格 */}
                <div className="login_div" style={{opacity:0.8}}>
                    <h2>1706A网络科技有限公司</h2>
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} ref="user" type="text" />
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} ref="pwd"  type="password"/>
                    <Button type="primary" onClick={()=>this.loginIn()} >登录</Button>
                </div>
            </div>
    }
}

export default Login
