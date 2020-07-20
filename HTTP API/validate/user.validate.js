var user=require("../models/user.models")
module.exports.postCreate=function(req,res,next){
var namerequire="";
var phonerequire="",nameerror="",phoneerror=""; 
if(!req.body.name){
   namerequire="Name is require"
}
if(!req.body.phone){
  phonerequire="Phone is require"
}
user.findOne({name:req.body.name}).then(function(user){
   console.log(user);
   if(user){
      nameerror="Name was has"
   }
}).then(function(){
   user.findOne({phone:req.body.phone}).then(function(user){
      console.log(user);
      if(user){
         phoneerror="Phone was has"
      }
      if(namerequire!=""||phonerequire!=""||nameerror!=""||phoneerror!=""){
         res.render("users/create",{
             namerequire:namerequire,
             phoneerror:phoneerror,
             values:req.body,
             nameerror:nameerror,
             phonerequire:phonerequire
         })
         return;
         }
         next(); 
   });
})
   
}
