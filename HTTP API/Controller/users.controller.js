var db=require("../db");
var shortid = require('shortid');
var user=require("../models/user.models");
module.exports={
    index:function(req,res){
        user.find().then(function(user){
        res.render("users/index",{
            users:user
        }
    )
    })
    },
    serch:function(req,res){
        var q=req.query.q;  
         if(q==""){
              res.redirect("/users")
         }
         else{
            user.find().then(function(user){
                console.log(user)
                res.render("users/index",{
                    e:q,
                    users:user.filter(function(user){
                        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
                    }),
                })
            })
        }      
    },
    remove:function(req,res){
        var id=req.params.id;
        user.remove({_id:id}).exec();
        res.redirect("/users")
    },
    create:function(req,res){
        res.render("users/create")
    },
    view:function(req,res){
        var id=req.params.id;
        user.find().then(function(user){
        res.render("users/view",{
            user:user.find(function(user){
                return user.id==id;
            })
        })
    })
    },
    createPost:function(req,res){
        req.body.id=shortid.generate();
        req.body.avatar=req.file.path.split("\\").slice(1).join("\\");
        user.create(req.body)
        res.redirect("/users")
    },
    update:function(req,res){
        var id=req.params.id;
        console.log(id);
        res.render("users/update",{
            id:id,
        })
    },
    updatePost:function(req,res){
        var id=req.params.id;
        user.findOne({_id:id}).then(function(user){
            user.name=req.body.nameupdate;
        return user.save();
        })
        res.redirect("/users");
    }
}