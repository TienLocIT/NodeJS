
// var user=db.get("users").find({id:req.cookies.UserID}).value();
var user=require("../models/user.models");
module.exports.requireAuth=function(req,res,next){
    if(!req.signedCookies.UserID){
        res.redirect("/auth/login");
        return;
    }
    user.findOne({_id:req.signedCookies.UserID}).then(function(user){ 
    if(!user){
        res.redirect("/auth/login");
        return;
    }
    res.locals.user=user;
    next();
});
}