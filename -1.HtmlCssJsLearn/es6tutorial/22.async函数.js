// async 函数是什么？一句话，它就是 Generator 函数的语法糖。
const fetch = require('isomorphic-fetch')
// 原始
const fs = require('fs')
const { resolve } = require('path')
const readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function (error, data) {
      if (error) return reject(error)
      resolve(data)
    })
  })
}
const gen = function* () {
  const f1 = yield readFile('/etc/test')
  const f2 = yield readFile('/etc/shels')
  console.log(f1.toString())
  console.log(f2.toString())
}

// 改进
const asyncReadFile = async function () {
  const f1 = await readFile('webgpu.html')
  const f2 = await readFile('testgpu.js')
  // console.log(f1.toString())
  // console.log(f2.toString())
}
// async就是将Generator函数的*号改为async，将yield改为await

// async函数对 Generator 函数的改进，体现在以下四点。
// 1.内置执行器
// Generator 函数的执行必须靠执行器，所以才有了co模块，而async函数自带执行器。也就是说，async函数的执行，与普通函数一模一样，只要一行。
asyncReadFile().then(
  (result) => console.log(result),
  (err) => console.log(err)
)
// 上面的代码调用了asyncReadFile函数，然后它就会自动执行，输出最后结果。这完全不像 Generator 函数，需要调用next方法，或者用co模块，才能真正执行，得到最后结果。

// （2）更好的语义。
// async和await，比起星号和yield，语义更清楚了。async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。

// （3）更广的适用性。
// co模块约定，yield命令后面只能是 Thunk 函数或 Promise 对象，而async函数的await命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，
// 但这时会自动转成立即 resolved 的 Promise 对象）。

// （4）返回值是 Promise。
// async函数的返回值是 Promise 对象，这比 Generator 函数的返回值是 Iterator 对象方便多了。你可以用then方法指定下一步的操作。
// 进一步说，async函数完全可以看作多个异步操作，包装成的一个 Promise 对象，而await命令就是内部then命令的语法糖。

// 例子
// 指定多少毫秒后输出一个值
function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
// 声明异步函数
async function asyncPrint(value, ms) {
  await timeout(ms)
  console.log(value)
}
asyncPrint('caonima', 1000)

// async函数返回的 Promise 对象，必须等到内部所有await命令后面的 Promise 对象执行完，才会发生状态改变，
// 除非遇到return语句或者抛出错误。也就是说，只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数。

// await命令
// 正常情况下，await命令后面是一个 Promise 对象，返回该对象的结果。如果不是 Promise 对象，就直接返回对应的值。
async function f() {
  return await 123
}
// f().then((result) => console.log(result))

// 任何一个await语句后面的 Promise 对象变为reject状态，那么整个async函数都会中断执行
async function f1() {
  // 不管异步操作成不成功,就执行下一步awiat(用try catch)
  try {
    // 没必要return await
    await Promise.reject('error123')
    // await Promise.resolve('hello world') //不会执行
  } catch (error) {
    console.log(error)
  }
  await Promise.resolve('hello')
}
f1().then(
  (result) => console.log(result),
  (err) => console.log(err)
)

// 同时触发
async function getFoo() {
  console.log('foo')
}
async function getBar() {
  console.log('bar')
}
// 方法一
// let [foo, bar] = await Promise.all[(getFoo(), getBar())]
// 方法二
let fooPromise = getFoo()
let barPromise = getBar()
// let foo1 = await fooPromise
// let bar1 = await barPromise

// 第三点，await命令只能用在async函数之中，如果用在普通函数，就会报错。

// async函数的实现原理
// async 函数的实现原理，就是将 Generator 函数和自动执行器，包装在一个函数里

// 实例
// 按顺序完成异步操作
async function loginOrder(urls) {
  const textPromises = urls.map(async (url) => {
    const response = await fetch(url)
    return response.text()
  })
  for (const textPromise of textPromises) {
    console.log(await textPromise)
  }
}
loginOrder([
  'https://www.baidu.com',
  'https://www.baidu.com',
  'https://www.baidu.com',
])

// 早期的语法规定是，await命令只能出现在 async 函数内部，否则都会报错。
// 报错
// const data = await fetch('https://api.example.com');


// 从 ES2022 开始，允许在模块的顶层独立使用await命令，使得上面那行代码不会报错了。它的主要目的是使用await解决模块异步加载的问题。
