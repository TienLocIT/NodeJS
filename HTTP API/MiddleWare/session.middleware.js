var session=require("../models/session.models");
var shortid=require("shortid");
module.exports=function(req,res,next){
    if(!req.signedCookies.sessionId){
        var sessionId=shortid.generate();
        res.cookie("sessionId",sessionId,{
            signed:true
        });
       session.create({id:sessionId});
    }
    next();
}