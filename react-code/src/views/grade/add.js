import React, { Component } from 'react'
import {Input, Button} from 'antd'

//导出验证非空的函数
import {typeNull} from '@/until'

let __methods = 'post'
let __url = '/grade/add'

export default class GradeAdd extends Component {
    IsEdit=()=>{
        if(this.props.location.state !== undefined){
            __url     = '/grade/edit';
            __methods = 'put';
            return this.props.location.state 
        } 
        return {
            name:'',
            llgrade:'',
            ll_is:'',
            jngrade:'',
            jn_is:''
        }
    }
    state=this.IsEdit()
    //提交数据
    submitData=()=>{
        var obj  = {...this.state}
        
        //验证非空的函数
        typeNull(obj)

        this.axios(__methods,__url,obj).then(data=>{
            if(data.data.code === 444){
                this.props.history.push('/login')
                return
            }
            if(data.data.code===0){
                //弹出提示
                alert(data.data.msg)

                if(__url === '/grade/add'){
                    //更新列表数据
                    this.setState({
                        name:'',
                        llgrade:'',
                        ll_is:'',
                        jngrade:'',
                        jn_is:''
                    });
                }
               

            }
        })
    }
    
    render() {
        const {name,llgrade,ll_is,jngrade,jn_is} = this.state
        return (
            <div>
                <div>姓名<Input value={name}            type="text" style={{ width: 120 }}     onChange={(e)=>this.setState({name:e.target.value})}/></div>
                <div>理论成绩<Input value={llgrade}      type="text" style={{ width: 120 }}     onChange={(e)=>this.setState({llgrade:e.target.value,ll_is:e.target.value>=90?'yes':'no'})}/></div>
                <div>是否成才{ll_is}</div>
                <div>技能成绩 <Input value={jngrade}      type="text"  style={{ width: 120 }}    onChange={(e)=>this.setState({jngrade:e.target.value,jn_is:e.target.value>=90?'yes':'no'})}/></div>
                <div>是否成才{jn_is}</div>
              
                <Button onClick={()=>this.submitData()}>提交</Button>
            </div>
        )
    }
}



