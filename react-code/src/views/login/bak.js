import React, { Component } from 'react'
import Cartoons from 'zx_cartoons/index.js'
import 'zx_cartoons/cartoon.css'
Cartoons(document.documentElement)

export default class Backgrounds extends Component {
    state={
        side:[1,3,1,6]
    }
    render() {
        return (
            <div className="cartoon_body">
                <div className='scene'>
                {
                    this.state.side.map((i,key)=>{
                        return  <div key={key}  className='assembly'>
                                    <div className='strip'></div>
                                    <div className='roller'>
                                    {
                                        [...Array(i).keys()].map((j,keys)=>{
                                            return <div key={keys} className='side'></div>
                                        })
                                    }
                                    </div>
                                    
                                </div> 
                    })
                }
                </div>
            </div>
        )
    }
}
