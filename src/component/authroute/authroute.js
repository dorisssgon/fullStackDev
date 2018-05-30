import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'
@withRouter
class AuthRoute extends React.Component{
    componentDidMount(){
        const publicList=['/login','/register'];
        const pathname = this.props.location.pathname;
        if(publicList.indexOf(pathname)>-1){
            return null;
        }else{

        }

        axios.get('/user/info')
        .then(res=>{
            if(res.status == 200){
                if(res.data.code == 0){
                    // 有登入信息
                }else{
                    this.props.history.push('/login')
                }

            }
        })
    }
    render(){
        return <p>this is authroute</p>
    }
}

export default AuthRoute;
//是否登入
// 现在的Url地址  login 不需要跳转
//    用户的type  身份
//    用户是否完善信息  