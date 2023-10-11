const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('HELLO,HTTP!\n')
})

const port=3000;
const hostname='127.0.0.1';

server.listen(port,hostname,()=>{
  console.log(`http server is running on port ${port}`);
})
