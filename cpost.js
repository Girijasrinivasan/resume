var express = require('express')
var app = express()
var path=require('path')
var bodyParser = require('body-parser');
var da1=require('./comments.js')

app.get('/dalist',function(req,res){
    da1.find({},function(err,data){
        res.json(data)
 })
 })

// app.get('/newcreate',function(req,res){
//     new da1({name:"Name"}).save()
//     res.send("success")
// )}

app.get('/newCreate',function(req, res){
    new da1.ani({name:"mName"}).save()
    res.send('success')
})

app.use('/routing', express.static(path.join(__dirname, 'routing')))
app.listen(3000)