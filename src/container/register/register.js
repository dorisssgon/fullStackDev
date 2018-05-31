import React from 'react';
import Logo from'../../component/logo/logo';
import {List, InputItem, Radio,WingBlank, WhiteSpace,Button} from 'antd-mobile';
import Axios from 'axios';
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import {register} from '../../redux/user.redux';

// connect  store's state  and  thunk, so just pick up the part needed in store and the axios
@connect(
    state=>state.user,
    {register}
)
class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user:'',
            pwd:'',
            repeatpwd:'',
            type:'genius'
        }
        this.handleRegister = this.handleRegister.bind(this);
    }
    handleChange(key,value){
        this.setState({
            [key]:value
        })
    }
    handleRegister(){
        this.props.register(this.state);
    }
    render(){
        const RadioItem = Radio.RadioItem;
        return (
        <div>
            <Logo></Logo>
                {this.props.redirectTo? <Redirect to={this.props.redirectTo}/>:null};
            <List>
                {this.props.msg?<p className="error-msg">{this.props.msg}</p>:null}
                <InputItem
                  onChange={v=>this.handleChange('user',v)}
                >user name</InputItem>
                <WhiteSpace />
                <InputItem type="password"
                  onChange={v=>this.handleChange('pwd',v)}
                >password</InputItem>
                <WhiteSpace />
                <InputItem type="password"
                  onChange={v=>this.handleChange('repeatpwd',v)}
                >confirm password</InputItem>
                <WhiteSpace />
                <RadioItem checked={this.state.type == 'genius'}
                            onChange={()=>this.handleChange('type','genius')}>genius
                </RadioItem>
                <WhiteSpace />
                <RadioItem checked={this.state.type == 'boss'}
                            onChange={()=>this.handleChange('type','boss')}>boss
                </RadioItem>
                <Button type="primary" onClick={this.handleRegister}>Register</Button>
            </List>
        </div>)
    }
}

export default Register;