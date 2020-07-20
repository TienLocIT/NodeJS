var mongoose=require("mongoose");

var productSchema=new mongoose.Schema({
    name:String,
    description:String,
    image:String,
})
var product=mongoose.model("product",productSchema,"products");
module.exports=product;
