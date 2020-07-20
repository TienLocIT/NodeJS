
var product=require("../../models/product.models")
module.exports={
    index: async function(req,res){
   var products= await product.find()
       res.json(products);
    },
    create:async function(req,res){
        var products=await product.create(req.body);
        res.json(products);
    },
    replace:async function(req,res){
        var products=await product.findOneAndReplace(
        {_id:req.params.id},
        {name:req.body.name,image:req.body.image,description:req.body.description});
        res.json(products);
    },
    update:async function(req,res){
       var products=await product.findOneAndUpdate(
           {_id:req.params.id},
           {name:req.body.name},
    )
    res.json(products); 
    },
    delete:async function(req,res){
        var products=await product.findOneAndRemove({_id:req.params.id})
        res.json(products);
    }
}