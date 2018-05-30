import React from 'react';
import Logo from'../../component/logo/logo';
import {List, InputItem, Radio,WingBlank, WhiteSpace,Button} from 'antd-mobile';


class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            type:'genius'
        }
    }
    render(){
        const RadioItem = Radio.RadioItem;
        return (
        <div>
            <Logo></Logo>
            <List>
                <InputItem>user name</InputItem>
                <WhiteSpace />
                <InputItem>password</InputItem>
                <WhiteSpace />
                <InputItem>confirm password</InputItem>
                <WhiteSpace />
                <RadioItem checked={this.state.type == 'genius'}>genius
                </RadioItem>
                <WhiteSpace />
                <RadioItem checked={this.state.type == 'boss'}>boss
                </RadioItem>
                <Button type="primary">Register</Button>
            </List>
        </div>)
    }
}

export default Register;