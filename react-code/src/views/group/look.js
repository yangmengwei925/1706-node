import React, { Component } from 'react'


export default class Edit extends Component {

    //页面初始化数据是通过路由传参带过来的
    state = this.props.location.state

    render() {
        const {user,pass,phone,sex,realname,role} = this.state
        return (
            <div>
                <div>用户账号{user}</div>
                <div>用户账号{pass}</div>
                <div>用户账号{phone}</div>
                <div>用户账号{sex}</div>
                <div>用户账号{realname}</div>
                <div>用户账号{role==='admin'?'管理员':'普通用户'}</div>
            </div>
        )
    }
}



