const express = require('express')
const httpProxy = require('http-proxy')
const url = require('url')

const app = express()
const port = 3000

// 创建一个反向代理
const proxy = httpProxy.createProxyServer({})

// 目标服务器的 URL
const target = 'http://www.testingmcafeesites.com' // 替换为你想代理的目标 URL

// 中间件函数，用于处理所有传入的请求
app.use((req, res) => {
  // 从请求中提取路径
  const reqUrl = req.url

  // 使用反向代理将请求转发到目标服务器
  proxy.web(req, res, {
    target: target,
    prependPath: false,
    ignorePath: true,
  })
})

// 监听指定端口
app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`)
})
