var db=require("../db");
var shortid = require('shortid');
module.exports={
    index:function(req,res){
        res.render("users/index",{
            users:db.get("users").value()
    })
    },
    serch:function(req,res){
        var q=req.query.q;  
        var a;
        if(q==""){
             a=db.get("users").value();
        }
        else{
            a=db.get('users').filter({name:q})
            .value();
        }       
        res.render("users/index",{
            e:q,
            users:a
        })
    },
    remove:function(req,res){
        var id=req.params.id;
        db.get("users").remove({
            id:id
        }).write();
        res.redirect("/users")
    },
    create:function(req,res){
        res.render("users/create")
    },
    view:function(req,res){
        var id=req.params.id;
        var user=db.get("users").find({id:id}).value();
        res.render("users/view",{
            user:user
        })
    },
    createPost:function(req,res){
        req.body.id=shortid.generate();
        db.get("users").push(req.body).write();
        res.redirect("/users")
    }
}