var express = require('express')
var app = express()
var path=require('path')
var bodyParser = require('body-parser');
var da1=require('./Database1.js')
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
/*app.use(User.urlencoded({ extended: false}));
app.use(User.json());*/
 

app.use(express.static(__dirname));
 app.get('*', function (req, res) {
     res.send('Hello World')
 })



 app.post('/authenticate', function (req, res) {
    
    var user = new da1({ 
        "name": req.body.name,
        "email": req.body.email,
        "phonenumber": req.body.phonenumber,
        "comments": req.body.comments
       
    });
    console.log(user)
    user.save(function (err, data) {
        console.log(data)
        res.json(data);
    })
});
app.get('/chekps', function (req, res) {
    res.render('authenticate');
});


console.log("Success")


 app.use('/routing', express.static(path.join(__dirname, 'routing')))
 app.use(express.static(__dirname));
console.log(__dirname)
app.listen(3000)
