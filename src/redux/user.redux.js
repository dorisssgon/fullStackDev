//reducer update store
import axios from 'axios';
import {getRedirectPath} from '../util.js';

const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const ERROR_MSG = "ERROR_MSG";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOAD_DATA ="LOAD_DATA"
const initalState={
    redirectTo:'',
    isAuth:false,
    msg:'',
    user:'',
    type:''
}
//user for update store's data
export function user(state=initalState, action){
    switch(action.type){
        case REGISTER_SUCCESS:
          return {...state, msg:'',redirectTo:getRedirectPath(action.payload),isAuth:true}
        case ERROR_MSG:
          return {...state, isAuth:false, msg: action.payload}
        case LOGIN_SUCCESS:
          return {...state, msg:'',redirectTo:getRedirectPath(action.payload),isAuth:true}
        case LOAD_DATA:
          return {...state, ...action.payload}
        default:   return state;
    }
}
//this is action
function errorMsg(msg){
    return { type:ERROR_MSG, payload:msg}
}
function registerSuccess(data){
    return { type:REGISTER_SUCCESS, payload:data}
}
function loginSuccess(data){
    return {type:LOGIN_SUCCESS, payload:data}
}

export function loadData(userinfo){
    return {type:LOAD_DATA,payload:userinfo}
}
//thunk
//register for handle post data to back end
export function register({user,pwd,repeatpwd,type}){
    if(!user||!pwd){
        return errorMsg("require user's name and password")
    }
    if(pwd!==repeatpwd){
        return errorMsg('confirmation password not equal password')
    }
    return dispatch=>{
        axios.post('/user/register',{user,pwd,type})
      .then(res=>{
          if(res.status == 200 && res.data.code === 0){
            dispatch(registerSuccess({user,pwd,type}))
          }else{
              //res.data.msg from backend
            dispatch(errorMsg(res.data.msg))
          }
        })
    }
}
export function login({user,pwd}){
    if(!user||!pwd){
        return errorMsg("require user's name and password");
    }
    return dispatch=>{
        axios.post('/user/login',{user,pwd})
        .then(res=>{
            if(res.status == 200 && res.data.code ===0){
                dispatch(loginSuccess(res.data.data))
            }else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}