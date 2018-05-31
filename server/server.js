const express = require('express');
const utils = require('utility');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRouter = require('./user');
const app = express();
//开启中间件，中间件可以使路由

app.use(cookieParser());
//可以解析post过来的数据
app.use(bodyParser.json());
app.use('/user',userRouter);
// create an app

app.listen(9093,function(){
    console.log('Node app start at port 9093')
  })

// //类似于 sql的表 有字段的概念 schema  model
// //define  model
// const User = mongoose.model('user', new mongoose.Schema({
//     user:{type:String, require:true},
//     age:{type:Number, require:true}
// }))
// //create date
// User.create({
//     name:'immoc',
//     age:18
// },function(err,doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })

// const app = express()

// app.get('/',function(req,res){
//     res.send('<h1>hello world</h1>')
// })
// app.get('/data', function(req,res){
//     //find  all , so {}
//     User.find({},function(err,doc){
//        res.json(doc)
//     })
// })
