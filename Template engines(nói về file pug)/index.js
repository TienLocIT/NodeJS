var express=require("express");
var app=express();

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
        users:[
        {id:1 ,name:"Loc"},
        {id:2 ,name:"Chung"}
        ]
})
})
app.listen(post,function(){
    console.log("Example app listening "+post)
});
