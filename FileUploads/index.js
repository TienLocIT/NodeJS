var express=require("express");
var app=express();
require('dotenv').config();
var bodyParser = require('body-parser');
var userRoutes=require("./Router/user.router");
var authLogin=require("./Router/auth.route");
var productRoutes=require("./Router/product.route")
var cookieParser=require("cookie-parser")
var paginate=require("express-paginate");
var authRequire=require("./MiddleWare/auth.middle")
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(paginate.middleware(10,50));
app.use(bodyParser.json());
app.use(cookieParser(process.env.SessionSecret));
app.use(express.static("public"));
var post=3000;
app.set('view engine', 'pug');
app.set('views', './views');//THư mục chứa views

app.get("/",function(req,res){
   res.render("index",{
       name:"PPP",
   })
})

app.use("/auth",authLogin)
app.use("/users",authRequire.requireAuth,userRoutes);
app.use("/product",productRoutes);
app.listen(post,function(){
    console.log("Example app listening "+post)
});
