var express=require("express");
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());
var post=3000;
var users=[
        {id:1 ,name:"Loc"},
        {id:2 ,name:"Chung"}
]
app.set('view engine', 'pug');
app.set('views', './views');//THư mục chứa views
app.get("/",function(req,res){
   res.render("index",{
       name:"Lộc",
   })
})
app.get("/users",function(req,res){
    res.render("users/index",{
        users:users
})
})
app.get("/users/search",function(req,res){
    var q=req.query.q;  
    var matchUsers=users.filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase())!==-1;
    })
    res.render("users/index",{
        e:q,
        users:matchUsers
    })
})
app.get("/users/create",function(req,res){
    res.render("users/create")

})
app.post("/users/create",function(req,res){
    users.push(req.body);
    res.redirect("/users")
})
app.listen(post,function(){
    console.log("Example app listening "+post)
});
