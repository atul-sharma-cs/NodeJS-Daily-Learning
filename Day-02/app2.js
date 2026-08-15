const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if(req.url === '/'){
    console.log(req.url, req.method, req.headers)
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Complete Coding</title></head>')
    res.write('<body><h1>Welcome to Home page</h1></body>')
    res.write('</html>')
    return res.end();
  }
  else if(req.url === '/products'){
    console.log(req.url, req.method, req.headers)
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Complete Coding</title></head>')
    res.write('<body><h1>Check Out our products</h1></body>')
    res.write('</html>')
    return res.end();
  }
  else{
    console.log(req.url, req.method, req.headers)
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Complete Coding</title></head>')
    res.write('<body><h1>Like / Share / Subscribe </h1></body>')
    res.write('</html>')
    res.end();
  }

})

const port = 3000;
server.listen(port, ()=>{
  console.log(`Server is running on address http://localhost:${port}`)
})