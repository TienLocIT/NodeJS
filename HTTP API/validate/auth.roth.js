var user=require("../models/user.models")
module.exports.postLogin=function(req,res,next){
    var emailrequire="",passwordrequire="";
    if(!req.body.email){
        emailrequire="Email is require";
    }
    if(!req.body.password){
        passwordrequire="Password is require";
    }
    if(emailrequire!=="" && passwordrequire!==""){
        res.render("auth/login",{
            emailrequire:emailrequire,
            passwordrequire:passwordrequire
    })
    }
    user.findOne({email:req.body.email}).then(function(user){
        if(!user){
            res.render("auth/login",{
                emailerror:"User does not exit",
                emailrequire:emailrequire,
                values:req.body
            })
            return;
        }
        if(user.password!==req.body.password||req.body.password===""){
            res.render("auth/login",{
                passworderror:"Wrong Password",
                passwordrequire:passwordrequire,
                values:req.body
            })
            return;
        } 
        res.cookie("UserID",user.id,{
            signed:true
    });
    next();
    })
    }