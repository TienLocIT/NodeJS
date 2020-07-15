var express = require('express');
var router = express.Router();
var controller=require("../Controller/users.controller");
var validate=require("../validate/user.validate")
router.get("/",controller.index)
router.get("/search/",controller.serch)
router.get("/remove/:id",controller.remove)
router.get("/create",controller.create)
router.get("/:id",controller.view)
router.post("/create",validate.postCreate,controller.createPost)
module.exports=router;
