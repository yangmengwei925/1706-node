import React, { Component } from 'react'
import {Input, Button,Select} from 'antd'

//导出验证非空的函数
import {typeNull} from '@/until'
const { Option } = Select;

export default class Edit extends Component {

    //页面初始化数据是通过路由传参带过来的
    state = this.props.location.state

    submitData=()=>{
        var obj  = {...this.state}
       
        //验证非空的函数
        typeNull(obj)

        obj.pass = this.$md5(obj.pass)
    
        this.axios('post','/group/edit',obj).then(data=>{
            if(data.data.code === 444){
                this.props.history.push('/login')
                return
            }
            alert(data.data.msg)
        })
    }
    
    render() {
        const {user,pass,phone,sex,realname,role} = this.state
        return (
            <div>
                <div>用户账号{user}</div>
                <div>用户密码<Input value={pass}  type="text" style={{ width: 120 }}     onChange={(e)=>this.setState({pass:e.target.value})}/></div>
                <div>真实姓名<Input value={realname}  type="text" style={{ width: 120 }} onChange={(e)=>this.setState({realname:e.target.value})}/></div>
                <div>手机号 <Input value={phone}  type="text"  style={{ width: 120 }}    onChange={(e)=>this.setState({phone:e.target.value})}/></div>
                <div>性别   <Input value={sex}  type="text"  style={{ width: 120 }}      onChange={(e)=>this.setState({sex:e.target.value})}/></div>
                <div>角色   
                    <Select value={role} style={{ width: 120 }} onChange={(value)=>this.setState({role:value})}>
                          <Option value="admin">管理员</Option>
                          <Option value="pur">普通用户</Option>
                      </Select>
                      </div>
                <Button onClick={()=>this.submitData()}>提交</Button>
            </div>
        )
    }
}



