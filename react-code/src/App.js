import React,{Component} from 'react';
import {Provider} from 'react-redux'
import store from './store'

import {BrowserRouter} from 'react-router-dom'

import configrouters from './router/router.config.js'
import RouterViews from './router/router.view.js'
import './app.css'

class App extends Component{
 render(){
   return <Provider store={store}>
      <BrowserRouter>
          <RouterViews routers={configrouters}/>
      </BrowserRouter>
   </Provider>
 }

}

export default App 
