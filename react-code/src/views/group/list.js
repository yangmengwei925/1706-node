import React, { Component } from 'react'
import { Table,Input, Button,Tag} from 'antd';
export default class List extends Component {
    state={
        //数据源
        list:[],
        //table 配置项
        columns:[
            {
                title:'组员ID',
                key:'userId',
                dataIndex:'userId'
            },
            {
                title:'组员姓名',
                key:'realname',
                dataIndex:'realname'
            }, 
            {
                title:'性别',
                key:'sex',
                dataIndex:'sex'
            },
            {
                title:'电话',
                key:'phone',
                dataIndex:'phone'
            },
            {
                title:'操作',
                key:'isDog',
                dataIndex:'isDog',
                render:(value,item,key)=>{
                    return <div>
                        <Tag onClick={()=>this.deleteWay(item.userId)}>删除</Tag>
                        <Tag onClick={()=>this.props.history.push('/home/look',item)}>查看</Tag>
                        <Tag onClick={()=>this.props.history.push('/home/edit',item)}>编辑</Tag>
                    </div>
                }
            }
        ]
    }
    //页面初始化
    componentWillMount(){
        this.axios('get','/group/list').then(data=>
            {
                if(data.code === 444){
                    console.log(data.msg)
                    this.props.history.push('/login')
                    return
                }
                this.setState({list:data.data.data})
        })
        
    }
    //点击删除
    deleteWay=(userId)=>{
        this.axios('post','/group/delete',{userId}).then(data=>{
            if(data.data.code === 444){
                this.props.history.push('/login')
                return
            }
            if(data.data.code ===999 ){
                alert(data.data.msg)
                return 
            }
            this.setState({list:data.data.data},()=> alert(data.data.msg))
        })
    }

    searchData=()=>{
        this.axios('post','/group/search',{realname:this.refs.realname.input.value}).then(data=>{
            if(data.code === 444){
                this.props.history.push('/login')
                return
            }
            this.setState({list:data.data.data})
        })
    }

    render() {
            const {list,columns} = this.state
        return (
            <div>
                {/* 搜索区域 */}
               <div>
                   <Input ref="realname" type="text"/>
                   <Button onClick={()=>this.searchData()}>搜索</Button>
               </div>
               {/* 添加区域 */}
               <div onClick={()=>this.props.history.push('/home/add')}>添加组员</div>
               {/* 列表区域 */}
               <div>
               <Table rowKey={item=>item.userId} columns={columns} dataSource={list} />     
               </div>
               
            </div>
        )
    }
}

