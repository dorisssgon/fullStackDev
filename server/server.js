const express = require('express')
const mongoose = require('mongoose')
// create an app

//connect this two and use imooc set
const DB_URL = 'mongodb://127.0.0.1:27017/imooc'
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function(){
    console.log('mongo connect successly')
})
//类似于 sql的表 有字段的概念 schema  model
//define  model
const User = mongoose.model('user', new mongoose.Schema({
    user:{type:String, require:true},
    age:{type:Number, require:true}
}))
//create date
User.create({
    name:'immoc',
    age:18
},function(err,doc){
    if(!err){
        console.log(doc)
    }else{
        console.log(err)
    }
})

const app = express()

app.get('/',function(req,res){
    res.send('<h1>hello world</h1>')
})
app.get('/data', function(req,res){
    //find  all , so {}
    User.find({},function(err,doc){
       res.json(doc)
    })
})
app.listen(9093,function(){
  console.log('Node app start at port 9093')
})