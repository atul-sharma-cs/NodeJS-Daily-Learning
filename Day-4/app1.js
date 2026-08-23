const express = require('express');

const app = express();

app.get("/", function(req, res){
  res.send("Champion mera anuj");
})

app.get("/profile", function(req, res){
  res.send("Champion uska coach")
})

app.listen(3000);