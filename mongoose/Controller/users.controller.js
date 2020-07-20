
var shortid = require('shortid');
var user=require("../models/user.models");
module.exports={
    index: async function(req,res){
        var users=await user.find();
        res.render("users/index",{
            users:users
        })
    },
    serch:async function(req,res){
        var users=await user.find();
        var q=req.query.q;  
         if(q==""){
              res.redirect("/users")
         }
         else{
                res.render("users/index",{
                    e:q,
                    users:users.filter(function(user){
                        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
                    }),
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
    view:async function(req,res){
        var id=req.params.id;
        var users=await user.find();
        res.render("users/view",{
            user:users.find(function(user){
                return user.id==id;
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
        res.render("users/update",{
            id:id,
        })
    },
    updatePost: async function(req,res){
        var id=req.params.id;
        var users=await user.findOne({_id:id});
        users.name=req.body.nameupdate;
        users.save();
        res.redirect("/users");
    }
}