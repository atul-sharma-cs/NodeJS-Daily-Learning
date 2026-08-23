const express = require('express');

const app = express();

app.get("/", function(req, res){
  res.send("Champion mera anuj");
})

app.get("/profile", function(req, res, next){
  return next(new Error("Something went wrong"))
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send("something went wrong, i don't have any ideas")
})

app.listen(3000);