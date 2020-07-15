var express=require("express");
var app=express();

var post=3000;
app.get("/",function(request,response){
    response.send("Hello World")
})
app.get("/user",function(request,response){
    response.send("user list")
})
app.listen(post,function(){
    console.log("Example app listening "+post)
});
