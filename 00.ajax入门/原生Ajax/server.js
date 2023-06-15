// 1.引入express
const express =require('express')

// 2.创建应用对象
const app =express()

// 3.创建路由规则
// request是请求报文的封装
// response是响应报文的疯转
app.get('/server',(request,response)=>{
  // 设置响应头，设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*')
  // 设置响应体
  response.send('hello ajax')
});

app.post('/server',(request,response)=>{
  // 设置响应头，设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*')
  // 设置响应体
  response.send('hello ajax POST')
});

app.get('/ie',(request,response)=>{
  // 设置响应头，设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*')
  // 设置响应体
  response.send('hello ajax ie')
});


// 延时响应
app.get('/delay',(request,response)=>{
  // 设置响应头，设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*')
  setTimeout(()=>{
    response.send('响应演示')
  },2000)
  // 设置响应体
  // response.send('hello ajax delay')
});

app.all('/json-server',(request,response)=>{
  // 设置响应头，设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*')
  
     // 3.发送json数据
     const data={
      name:'hawkinswaefea123123',
      number:'146466',
      sex:'男'
    }
    // json转字符串
    let str=JSON.stringify(data)  
    // 设置响应体
    response.send(str)
});

// 4.监听端口启动服务
app.listen(8000,()=>{
  console.log('服务已经启动，8000端口监听中')
})