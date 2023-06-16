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

app.get('/jquery-get',(request,response)=>{
  // 设置响应头，设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*')
  // 设置响应体
  // response.send('hello ajax jquery GET')
  const data={name:'hawkins',number:'wafwef'}
  response.send(data)


});

app.get('/axios-get',(request,response)=>{
  // 设置响应头，设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*')
  // 设置响应体
  // response.send('hello ajax jquery GET')
  const data={name:'hawkins',number:'wafwef'}
  response.send(data)


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

// 测试跨域jsonp
app.get('/jsonp-server',(request,response)=>{
  const data={
    name:'hello jsonp'
  }
  let str=JSON.stringify(data)
  // 必须要返回一段函数,函数的参数就是返回的数据
  response.end(`handle(${str})`)
})

// 测试jquery-jsonp
app.get('/jsonp-server-jsonp',(request,response)=>{
  const data={
    name:'hello jsonp-jsonp'
  }
  let str=JSON.stringify(data)
  // 接受callbak参数
  let cb=request.query.callback
  // 必须要返回一段函数,函数的参数就是返回的数据
  response.end(`${cb}(${str})`)
})
// 测试用户是否存在
app.all('/check-username',(request,response)=>{
  const data={
    exist:1,
    msg:'用户们已存在'
  }
  let str=JSON.stringify(data)
  // 必须要返回一段函数,函数的参数就是返回的数据
  response.end(`handle(${str})`)
})

// 测试cors
app.all('/check-cors',(request,response)=>{
  //设置响应头，设置允许跨
  response.setHeader("Access-Control-Allow-Origin","*");
  response.send('hello cors')
})



// 4.监听端口启动服务
app.listen(8000,()=>{
  console.log('服务已经启动，8000端口监听中')
})