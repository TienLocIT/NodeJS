
var product=require("../../models/product.models")
module.exports={
    index: async function(req,res){
   var products= await product.find()
       res.json(products);
    }
  
}