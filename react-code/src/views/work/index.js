import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react'
class Work extends Component {
    state={
        all:0,
        ll_p:0,
        jn_p:0,
        option : {}
        
    }
    render() {
        const { all,ll_p,jn_p,option} = this.state
       
        return<div>
           工作台

           <h2>理论成绩指标</h2>
           <div>
            <span>成才人数{ll_p}</span>
            <span>不成才人数{all-ll_p}</span>
            <span>成才率{ll_p/all*100+'%'}</span>
           </div>
           <h2>技能成绩指标</h2>
           <div>
            <span>成才人数{jn_p}</span>
            <span>不成才人数{all-jn_p}</span>
            <span>成才率{jn_p/all*100+'%'}</span>
           </div>
           <ReactEcharts option={option} style={{width:500,height:400}}/>
           </div>
    }
    componentDidMount(){
        this.axios('get','/grade/bin').then(data=>{
            if(data.data.code === 444){
                this.props.history.push('/login')
                return 
            }
            const {areas,ll_all,ll_is_person,jn_is_person} = data.data.data
            let option   = {
                title : {
                    text: '技能成绩饼状图',
                    subtext: '1706A',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['>=90分','80-89分','<80分']
                },
                series : [
                    {
                        name: '1706A技能成绩',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:areas,
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            }
            this.setState({option:{...option},all:ll_all,ll_p:ll_is_person,jn_p:jn_is_person},()=>console.log(this.state.option))
        })
    }
}
export default Work
