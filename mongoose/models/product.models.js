var mongoose=require("mongoose");

var productSchema=new mongoose.Schema({
    namae:String,
    description:String,
    image:String,
})
var product=mongoose.model("product",productSchema,"product");
module.exports=product;
