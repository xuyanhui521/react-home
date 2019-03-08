
import React from 'react';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import './Login.css'
import {Button,Icon,Form,Divider} from 'semantic-ui-react';

class Login extends React.Component{
   constructor(props){
     super(props)
     this.state={
       uname:'',
       pwd:'',
     }
   }
   handleUname=(e)=>{
       this.setState({
          uname:e.target.value
       })
   }

   handlePwd=(e)=>{
    this.setState({
      pwd:e.target.value
    })
}

submit= async()=>{
  const {history} = this.props;
   let {data:res}=await axios.post('http://47.96.21.88:8086/users/login',this.state) 
   console.log(res)
      if(res.meta.status!==200){
        return alert('登录失败')
      }
      window.sessionStorage.setItem('token',res.data.token)
      
      history.push('/home')

}
    render(){
      return (
        <div  className='login-container'>
             <div  className="login-logo">
                 <Icon.Group size='huge'>
                   <Icon size='huge' name='circle outline' color='orange' />
                   <Icon name='home' size="big" color='orange'/>
                 </Icon.Group>
              </div>
             
              <div  className='login-form'>
                 <Form >  
                     <Form.Input icon='user' iconPosition='left'  type='text' required placeholder='请输入用户名' name='name' value={this.state.uname} onChange={this.handleUname} />
                     <Form.Input icon='lock'  iconPosition='left'  type="password" required placeholder='请输入密码' name='password' value={this.state.pwd} onChange={this.handlePwd} />
                    <Button onClick={this.submit} fluid color='grey'>登录</Button>
                  </Form>  
              
               </div>
               <Divider horizontal>------</Divider>
              <div className="login-third">
               <Icon name='rocketchat' size='big' />
               <Icon name='qq'  size='big' />
               </div>
             </div>
            )
          }
      }
            
              
       

export default withRouter(Login);