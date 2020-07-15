var express = require('express');
var router = express.Router();
var controller=require("../Controller/users.controller");
router.get("/",controller.index)
router.get("/search/",controller.serch)
router.get("/remove/:id",controller.remove)
router.get("/create",controller.create)
router.get("/:id",controller.view)
router.post("/create",controller.createPost)
module.exports=router;
