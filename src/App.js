import React, { Component } from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';

import './App.css';
import Login from './Login'
import Home from './module/main'

class App extends Component {
  render() {
    return (
      <div>
         <BrowserRouter>
            < Switch>
                <Route exact path="/"  component={Login} />
                <Route exact path="/home"  component={Home} />
            </Switch>
         </BrowserRouter>
      
      </div>
    );
  }
}

export default App;
