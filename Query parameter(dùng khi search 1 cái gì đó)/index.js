var express=require("express");
var app=express();

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
app.listen(post,function(){
    console.log("Example app listening "+post)
});
