module.exports.postLogin=function(req,res,next){
    var emailrequire="",passwordrequire="";
    var users=db.get("users").find({email:req.body.email}).value();
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
    if(!users){
        res.render("auth/login",{
            emailerror:"User does not exit",
            emailrequire:emailrequire,
            values:req.body
        })
        return;
    }
    if(users.password!==req.body.password||req.body.password===""){
        res.render("auth/login",{
            passworderror:"Wrong Password",
            passwordrequire:passwordrequire,
            values:req.body
        })
        return;
    }
    res.cookie("UserID",users.id);
    next();
}