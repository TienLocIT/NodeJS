var db=require("../db")
// var user=db.get("users").find({id:req.cookies.UserID}).value();
module.exports.requireAuth=function(req,res,next){
    if(!req.cookies.UserID){
        res.redirect("/auth/login");
        return;
    }
    var user=db.get("users").find({id:req.cookies.UserID}).value();
    if(!user){
        res.redirect("/auth/login");
        return;
    }
next();
}