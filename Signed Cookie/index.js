var express=require("express");
var app=express();
var bodyParser = require('body-parser');
var userRoutes=require("./Router/user.router");
var authLogin=require("./Router/auth.route");
var cookieParser=require("cookie-parser")
var authRequire=require("./MiddleWare/auth.middle")
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
app.use(cookieParser("7c8adsdsa79729"));
var post=3000;
app.set('view engine', 'pug');
app.set('views', './views');//THư mục chứa views

app.get("/",function(req,res){
   res.render("index",{
       name:"Lộc",
   })
})
app.use("/auth",authLogin)
app.use("/users",authRequire.requireAuth,userRoutes);
app.listen(post,function(){
    console.log("Example app listening "+post)
});
