import React, { Component } from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';

import './App.css';
//导入组件库的样式
import 'semantic-ui-css/semantic.min.css'
import './assets/fonts/iconfont.css'
import Login from './Login'
import Main from './module/main'

import AuthCheck from './Auth'

class A extends React.Component{
  render(){
    return (
      <div>abc</div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
         <BrowserRouter>
            < Switch>
                <Route exact path="/"  component={Login} />
                <Route  path="/home"  component={Main} />
                <AuthCheck  path='/a' component={A}  />
            </Switch>
         </BrowserRouter>
      
      </div>
    );
  }
}

export default App;
