import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios'
import md5   from 'js-md5'
React.Component.prototype.$md5  = md5
React.Component.prototype.axios = function(method,url,data={}){
    return axios({
        method:method,
        url,
        data,
        headers:{authorToken:localStorage.getItem('token'),sessionID:localStorage.getItem('sessionID')}
    })
}

ReactDOM.render(<App />, document.getElementById('root'));


