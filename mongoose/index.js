var express = require("express");
var app = express();
require('dotenv').config();
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var userRoutes = require("./Router/user.router");
var authLogin = require("./Router/auth.route");
var productRoutes = require("./Router/product.route")
var cookieParser = require("cookie-parser")
var authRequire = require("./MiddleWare/auth.middle")
var sessionMiddle = require("./MiddleWare/session.middleware");
var cartRouth = require("./Router/cart.route");
var databseURLTrue={
    useUnifiedTopology: true ,
    useNewUrlParser: true
}
mongoose.connect(process.env.MongoURL,databseURLTrue )
mongoose.connection.on("connected",function(){
    console.log("Connected to database");
})
mongoose.connection.on("disconnected",function(){
    console.log("Can not connected to database");
})

app.use(bodyParser.urlencoded({ extended: true }));
mongoose.Promise=global.Promise;
var db=mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// parse application/json
app.use(bodyParser.json());
app.use(cookieParser(process.env.SessionSecret));
app.use(sessionMiddle);
app.use(express.static("public"));
var post = 3000;
app.set('view engine', 'pug');
app.set('views', './views');//THư mục chứa views     
app.get("/", function (req, res) {
    res.render("index", {
        name: "PPP",
    })
})
app.use("/auth", authLogin)
app.use("/users", authRequire.requireAuth, userRoutes);
app.use("/product", productRoutes);
app.use("/cart", cartRouth);
app.listen(post, function () {
    console.log("Example app listening " + post)
});
