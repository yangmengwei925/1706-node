import React from 'react'
import {Switch,Redirect,Route} from 'react-router-dom'

export default function RouterViews(props){
    const {routers} = props
    return <Switch>
            {
                routers.map((item,index)=>{
                    if(item.to!==undefined) return <Redirect key={index} from={item.from} to={item.to}></Redirect>
                    return <Route key={index}  path={item.path} render={props=>{
                            return <item.component {...props} routers={item.children}/>
                        }
                    }></Route>
                })
            }
    </Switch>
}