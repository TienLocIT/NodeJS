var express = require('express');
var router = express.Router();
var controller=require("../controllers/product.controller");
router.get("/",controller.index);
router.post("/",controller.create);
router.put("/:id",controller.replace)
router.patch("/update/:id",controller.update)
router.delete("/delete/:id",controller.delete)
module.exports=router;