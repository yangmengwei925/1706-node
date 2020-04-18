import React, { Component } from 'react'
import { Table,Button,Input} from 'antd';
export default class GradeList extends Component {
    state={
        data:[],
        columns:[
            {
                title:'成绩记录ID',
                key:'id',
                dataIndex:'id'
            },
            {
                title:'学生姓名',
                key:'name',
                dataIndex:'name'
            },
            {
                title:'理论成绩',
                key:'llgrade',
                dataIndex:'llgrade'
            },
            {
                title:'是否成才',
                key:'ll_is',
                dataIndex:'ll_is'
            },
            {
                title:'技能成绩',
                 key:'jngrade',
                dataIndex:'jngrade'
            },
            {
                title:'是否成才',
                key:'jn_is',
                dataIndex:'jn_is'
            },
            {
                title:'录入时间',
                key:'time',
                dataIndex:'time'
            },
            {
                title:'录入人员',
                key:'operoName',
                dataIndex:'operoName'
            },
            {
                title:'操作',
                key:'userid',
                dataIndex:'userid',
                render:(value,item,key)=> {
                    return<div>
                            <button onClick={()=>this.deleteData(item.id)}>删除</button>
                            <button onClick={()=>this.props.history.push('/home/gradeAdd',item)}>编辑</button>
                        </div>
                }
            }
        ]
    }
    deleteData=(id)=>{
        this.axios('delete','/grade/delete',{id}).then(data=>{
            if(data.data.code === 444){
                this.props.history.push('/login')
                return
            }
            alert(data.data.msg)
            this.setState({data:data.data.data})
        })
    }
    render() {
        const {columns,data} = this.state
        return (
            <div>
                {/* 搜索区域 */}
                <div>
                   <Input ref="realname" type="text"/>
                   <Button>搜索</Button>
               </div>
               {/* 添加区域 */}
               <div onClick={()=>this.props.history.push('/home/gradeAdd')}>添加成绩</div>

               {/* 列表区域 */}
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
    componentDidMount(){
        this.axios('get','/grade/list').then(data=>{
            if(data.data.code === 444){
                this.props.history.push('/login')
                return
            }
            this.setState({data:data.data.data})
        })
    }
}




