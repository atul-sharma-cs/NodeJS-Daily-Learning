const http = require('http')

function requestListner(req, res){
  console.log(req)
}

http.createServer(requestListner);