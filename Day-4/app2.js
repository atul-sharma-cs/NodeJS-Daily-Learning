const express = require('express');

const app = express();

app.use(function (req, res, next){
  console.log("middleware chala");
  next();
})

app.get("/", function(req, res){
  res.send("Champion mera anuj");
})

app.get("/profile", function(req, res){
  res.send("Champion uska coach")
})

app.listen(3000);