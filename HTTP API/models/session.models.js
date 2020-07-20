var mongoose=require("mongoose");

var sessionSchema=new mongoose.Schema({
    id:String,
    items: [{
        productId: {
            type: mongoose.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        qty: {
            type: Number,
            required: true
        }
    }],
})
var session=mongoose.model("session",sessionSchema,"sessions")
module.exports=session;