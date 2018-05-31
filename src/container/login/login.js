import React from 'react';
import Logo from '../../component/logo/logo';
import {List, InputItem, WingBlank, WhiteSpace,Button} from 'antd-mobile';
import {login} from '../../redux/user.redux';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
@connect(
    state=>state.user,
    {login}
)
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user:'',
            pwd:''
        }
        this.register = this.register.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    register(){
        this.props.history.push('./register')
    }
    handleChange(key,value){
        this.setState({
            [key]:value
        })
    }
    handleLogin(){
        this.props.login(this.state);
    }
    render(){
        return (
            <div>
            <Logo></Logo>
            {this.props.redirectTo? <Redirect to={this.props.redirectTo}/>:null};
            <WingBlank>
                <List>
                {this.props.msg?<p className="error-msg">{this.props.msg}</p>:null}
                    <InputItem
                      onChange={v=>this.handleChange('user',v)}
                    >user</InputItem>
                    <WhiteSpace />
                    <InputItem type="password"
                      onChange={v=>this.handleChange('pwd',v)}
                    >password</InputItem>
                </List>
                <Button type="primary"  onClick={this.handleLogin}>Login</Button>
                <WhiteSpace />
                <Button onClick={this.register}type="primary">Register</Button>
            </WingBlank>
            </div>
        )
    }
}

export default Login