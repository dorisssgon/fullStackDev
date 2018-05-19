import axios from 'axios'
import { Toast } from  'antd-mobile'
//interceptors request
axios.interceptors.request.use(function(config){
    Toast.loading('loading...', 0)
    return config
})

//interceptors response
axios.interceptors.response.use(function(config){
    setTimeout(()=>{
        Toast.hide()
    },2000)
    return config
})