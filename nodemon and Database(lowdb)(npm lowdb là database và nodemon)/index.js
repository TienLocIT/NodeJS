var express=require("express");
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var low = require('lowdb')
var FileSync = require('lowdb/adapters/FileSync')

var adapter = new FileSync('db.json')
 db = low(adapter)
 db.defaults({ users: [] })
  .write()

// parse application/json
app.use(bodyParser.json());
var post=3000;
app.set('view engine', 'pug');
app.set('views', './views');//THư mục chứa views
app.get("/",function(req,res){
   res.render("index",{
       name:"Lộc",
   })
})
app.get("/users",function(req,res){
    res.render("users/index",{
        users:db.get("users").value()
})
})
app.get("/users/search",function(req,res){
    var q=req.query.q;  
    var a;
    if(q==""){
         a=db.get("users").value();
    }
    else{
        a=db.get('users').filter({name:q})
        .value();
    }
    res.render("users/index",{
        e:q,
        users:a
    })
})
app.get("/users/create",function(req,res){
    res.render("users/create")

})
app.post("/users/create",function(req,res){
    db.get("users").push(req.body).write(),
    res.redirect("/users")
})
app.listen(post,function(){
    console.log("Example app listening "+post)
});
