import React, { Component } from 'react'

export default class RoleList extends Component {
    state={
        list:[]
    }
    render() {
        const {list} = this.state
        return (

            <div>
                <button onClick={()=>this.props.history.push('/home/RoleAdd')}>添加</button>
                <div  className="table_div">
                <div>
                    <span>角色ID</span>
                    <span>角色名称</span>
                    <span> 菜单权限</span>
                    <span> 操作权限</span>
                    <span> 操作</span>
                </div>
                {
                    list.map((item,key)=>{
                        return <div key={key}>
                           <span>{item.rolename}</span>
                           <span>{item.role}</span>
                           <span>{item.tab.length}项</span>
                            <span>{
                            item.opr.map(item=>{
                                return <i className={item}></i>
                            })
                            }
                            </span>
                            <span>
                                {
                                    item.rolename==='admin'?null:<button>删除</button>
                                }
                            </span>
                        </div>
                    } ) 
                }
                </div>
               
                
            </div>
        )
    }
    componentDidMount(){
        this.axios('get','/role/list').then(data=>{
            console.log(data.data.data)
            if(data.data.code===0){
                this.setState({list:data.data.data},()=>console.log(data.data.data))
            }
        })
           
           
    }
}
