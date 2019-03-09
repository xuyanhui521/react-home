
import React from 'react';
import {Route, Redirect} from 'react-router-dom';


class AuthCheck extends React.Component{
  render(){
    const {component:Component,path}=this.props;
   
    let isLogin=sessionStorage.getItem('token')
    return (
      <Route 
        path={path}
        render={()=>{
          let info=<Component />;
          if(!isLogin){
            info=<Redirect to="/" />
          }

          return info
        }}
      
      />

    );
  }
}

export default AuthCheck;