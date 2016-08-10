var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

// router.get("/contact",function(req,res){
//   res.sendFile(path + "contact.html");
// });

// app.use('/static', express.static(path));
// app.use(express.static(path));

app.use(express.static(path));

app.use('/csv',express.static(__dirname+"/node_modules/comma-separated-values/"));


app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(2000,function(){
  console.log("Live at Port 2000");
});