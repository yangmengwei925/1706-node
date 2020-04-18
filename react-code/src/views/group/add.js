import React, { Component } from 'react'
import {Input, Button,Select} from 'antd'
//导出验证非空的函数
import {typeNull} from '@/until'
const { Option } = Select;

export default class Add extends Component {
    state={
        user:'',
        pass:'',
        realname:'',
        phone:'',
        sex:'',
        role:''
    }
    //提交数据
    submitData=()=>{
        var obj  = {...this.state}
        
        //验证非空的函数
        typeNull(obj)
        
        obj.pass = this.$md5(obj.pass)

        this.axios('post','/group/add',obj).then(data=>{
            if(data.data.code === 444){
                console.log(data.msg)
                this.props.history.push('/login')
                return
            }
            if(data.data.code === 333){
                alert(data.data.msg)
                return 
            }
            if(data.data.code===0){
                //弹出提示
                alert(data.data.msg)

                //重新赋值为空
                Object.keys(this.state).forEach(item=>this.state[item]='')

                //更新列表数据
                this.setState({});

            }
        })
    }
    
    render() {
        const {user,pass,phone,sex,realname,role} = this.state
        return (
            <div>
                <div>用户账号<Input value={user}      type="text" style={{ width: 120 }}     onChange={(e)=>this.setState({user:e.target.value})}/></div>
                <div>用户密码<Input value={pass}      type="text" style={{ width: 120 }}     onChange={(e)=>this.setState({pass:e.target.value})}/></div>
                <div>真实姓名<Input value={realname}  type="text" style={{ width: 120 }}     onChange={(e)=>this.setState({realname:e.target.value})}/></div>
               <div>手机号 <Input value={phone}      type="text"  style={{ width: 120 }}    onChange={(e)=>this.setState({phone:e.target.value})}/></div>
                <div>性别   <Input value={sex}        type="text"  style={{ width: 120 }}    onChange={(e)=>this.setState({sex:e.target.value})}/></div>
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



