const fs = require('fs')

fs.rm("./copy", {recursive: ture}, function(err){
  if(err) console.error(err);
  else console.log("removed");
})