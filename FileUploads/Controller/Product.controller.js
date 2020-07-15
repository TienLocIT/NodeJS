var db=require("../db")
var paginate = require('express-paginate');
module.exports={
    index:function(req,res){
var limit=8;
var arrayproduct=db.get("product");
var page=parseInt(req.query.page)||1//n
var number=Math.floor(arrayproduct.size().value()/limit);
var begin=(page-1)*limit;
var end=page*limit;
     res.render("product/index",{
         product:db.get("product").value().slice(begin,end),
         e:page,
         number1:number
     })
    }
}