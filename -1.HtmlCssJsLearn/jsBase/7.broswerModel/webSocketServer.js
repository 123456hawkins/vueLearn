// WebSocket 开始时使用了 HTTP 握手，但它在握手成功后不再依赖 HTTP，而是在 WebSocket 协议下运行，实现了全双工、低延迟、实时双向通信。
// 因此，一旦建立了 WebSocket 连接，就不再使用 HTTP，而是使用 WebSocket 协议进行通信。这使得 WebSocket 更适合需要实时性和双向通
const http = require('http')
const websocket = require('websocket').server

const httpServer = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('WebSocket Server\n')
})

const port = 3001

httpServer.listen(port, () => {
  console.log(`HTTP Server is running on http://127.0.0.1:${port}/`)
})

const wsServer = new websocket({
  httpServer: httpServer,
  autoAcceptConnections: false,
})

wsServer.on('request', (request) => {
  const connection = request.accept('echo-protocol', request.origin)
  console.log('WebSocket Connection Accepted')

  connection.on('message', (message) => {
    if (message.type === 'utf8') {
      connection.sendUTF(`You said: ${message.utf8Data}`)
    }
  })

  connection.on('close', (reasonCode, description) => {
    console.log(`Connection closed: ${reasonCode} - ${description}`)
  })
})
