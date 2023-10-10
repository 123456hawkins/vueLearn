const express = require('express')
const cors = require('cors')
const app = express()

// 添加 CORS 中间件以支持跨域请求
app.use(cors())

// 支持处理 PUT 请求的路由
app.get('/', (req, res) => {
  res.send({ data: 'PUT 请求已收到并处理。', msg: 'success' })
})

const port = 3000

app.listen(port, () => {
  console.log(`服务器正在监听端口 ${port}`)
})
