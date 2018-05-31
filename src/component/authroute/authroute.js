import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import {loadData} from '../../redux/user.redux'
import { withRouter } from 'react-router-dom';
@withRouter
@connect(
    null,
    {loadData}
)
class AuthRoute extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        const publicList=['/login','/register'];
        const pathname = this.props.location.pathname;

        if(publicList.indexOf(pathname)>-1){
            return null;
        }
        axios.get('/user/info')
          .then(res=>{
            if(res.status == 200){
                if(res.data.code == 0){
                    this.props.loadData(res.data.data);
                }else{
                    this.props.history.push('/login')
                }
    
            }
    })
        // console.log(this.props.history)

    }
    render(){
        return null;
    }
}

export default AuthRoute;
//是否登入
// 现在的Url地址  login 不需要跳转
//    用户的type  身份
//    用户是否完善信息  