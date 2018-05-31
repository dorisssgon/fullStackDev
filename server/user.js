const express = require('express');
const Router = express.Router();
const utils = require('utility');
const models = require('./model');
const User = models.getModel('user');
const _filter ={'pwd':0, '__v':0};
//get user's list
Router.get('/list', function(req, res){
    // User.remove({},function(err,doc){});
    User.find({},function(err,doc){
        return res.json(doc);
    })
})
Router.post('/login',function(req,res){
    const {user,pwd} = req.body;
    //第一个是查询条件第二个是显示条件
    User.findOne({user,pwd:md5Pwd(pwd)},_filter,function(err,doc){
        if(!doc){
            return res.json({code:1, msg:"user's name or pwd not exist"})
        }
        res.cookie('userid',doc._id)
        return res.json({code:0,data:doc})
    })
})
Router.post('/register',function(req,res){
    // console.log(req.body);
    const {user,pwd,type} = req.body;
    User.findOne({user:user},function(err,doc){
        if(doc){
            return res.json({code:1, msg:'user name already exist'})
        }
        // User.create({user,type,pwd:md5Pwd(pwd)},function(e,d){
        //     if(e)  code :1
        //     return res.json({code:0})
        // })
        //换方法是因为create没法拿到用户的id
        const userModel = new User({user,type,pwd:md5Pwd(pwd)});
        userModel.save(function(e,d){
            if(e){
                return res.json({code:1, msg:"back-end has error"})
            }
            const {user,type,_id} = d;
            res.cookie('userid',_id)
            return res.json({code:0, data:{user,type,_id}})
        })
    })
})
Router.get('/info',function(req,res){
    const {userid} = req.cookies;
    if(!userid){
         //bu chenggong de qingqiu
        return res.json({code:1})
    }
    User.findOne({_id:userid},_filter,function(err,doc){
        if(err){
            return res.json({code:1, msg:"back end has error"})
        }
        if(doc){
            return res.json({code:0, data:doc})
        }
    })
   
})

function md5Pwd(pwd){
    const salt = "imooc_is_good_dklfld@jlki~lkd";
    return utils.md5(utils.md5(pwd+salt));
}

module.exports = Router;
