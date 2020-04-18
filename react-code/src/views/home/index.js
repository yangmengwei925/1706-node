import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import RouterViews from '@/router/router.view'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Home extends Component {
    state={
        tab:[]
    }
    componentWillMount(){
        this.axios('get','/tab/tab').then(data=>{
            if(data.data.code === 444){
                console.log(data.data.msg)
                this.props.history.push('/login')
                return
            }
           this.setState({tab:data.data.data})
        })
    }
    render() {
        
        const {tab} = this.state
        console.log(tab)
        return (
            <div className="home">
                <Layout>
                    <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }} >
                        <Menu.Item key="1" onClick={()=>this.props.history.push('/home/work')}>工作台</Menu.Item>
                        <Menu.Item key="2">{localStorage.getItem('realname')}</Menu.Item>
                        <Menu.Item key="3" onClick={()=>
                            {
                                localStorage.clear()
                                this.props.history.push('/login')
                        }}>退出</Menu.Item>
                    </Menu>
                    </Header>
                    <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }}>
                        {
                            tab.map(i=>{
                            return <SubMenu key={i.fatherKey} title={<span><Icon type={i.fatherIcon} />{i.fatherName}</span>}>
                                            {
                                                i.sub.map(j=>{
                                                if(j.isShow === 'no') return
                                                return <Menu.Item key={j.routeKey} onClick={()=>this.props.history.push(j.to)}>{j.name}</Menu.Item>
                                                })
                                            }
                                    </SubMenu>
                            })
                        }
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '24px' }}>
                        <Content style={{background: '#fff',padding: 24,margin: 0,minHeight: 280}}>
                            <RouterViews routers={this.props.routers} />
                        </Content>
                    </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
export default Home




  