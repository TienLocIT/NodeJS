var express=require("express");
var app=express();
var bodyParser = require('body-parser');
var userRoutes=require("./Router/user.router");
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
var post=3000;
app.set('view engine', 'pug');
app.set('views', './views');//THư mục chứa views
app.use(express.static("public"));
app.get("/",function(req,res){
   res.render("index",{
       name:"Lộc",
   })
})
app.use("/users",userRoutes);
app.listen(post,function(){
    console.log("Example app listening "+post)
});
