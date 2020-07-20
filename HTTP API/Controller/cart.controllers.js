var db=require("../db");
var session=require("../models/session.models");
const product = require("../models/product.models");
module.exports.addToCart=function(req,res,next){
    var productId=req.params.productId;
     var sessionId=req.signedCookies.sessionId;
     if(!sessionId){
         res.redirect("/product");
         return;
     }
    session.findOne({id:sessionId}).then(function(session){
      var ItemExisting=session.items.find(function(item){
        return item.productId==productId;
      })
      console.log(ItemExisting);
      if(ItemExisting==undefined){
      session.items.push({productId:productId,qty:1});
      }
      else{
        ItemExisting.qty++;
      }
      return session.save();
    })
    res.redirect("/product");
}