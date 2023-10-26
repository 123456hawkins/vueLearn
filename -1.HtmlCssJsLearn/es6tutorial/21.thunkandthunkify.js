// JavaScript 语言是传值调用，它的 Thunk 函数含义有所不同。在 JavaScript 语言中，Thunk 函数替换的不是表达式，而是多参数函数，将其替换成一个只接受回调函数作为参数的单参数函数。
var fs = require('fs')
// 正常版本的readFile
fs.readFile('webgpu.html', function (err, str) {
  console.log(err, str)
})
// fs模块的readFile方法是一个多参数函数，两个参数分别为文件名和回调函数。经过转换器处理，它变成了一个单参数函数，只接受回调函数作为参数。这个单参数版本，就叫做 Thunk 函数。
// thunk版本的readFile
var fileName = 'webgpu.html'
var callback = function (err, data) {
  console.log(err, data)
}
var Thunk = function (fileName) {
  return function (callback) {
    return fs.readFile(fileName, callback)
  }
}
var readFileThunk = Thunk(fileName)
readFileThunk(callback)

// 生产环境的转换器，建议使用 Thunkify 模块。
var thunkify = require('thunkify')

var read = thunkify(fs.readFile)
read('webgpu.html')(function (err, str) {
  console.log(err, str)
})

// 新例子
function add(a, b, callback) {
  var sum = a + b
  callback(sum)
  callback(sum)
}

var ft = thunkify(add)
var print = console.log.bind(console)
ft(1, 2)(print) //3
// 上面代码中，由于thunkify只允许回调函数执行一次，所以只输出一行结果。

// Generator函数的流程管理
var readFileThunk2 = thunkify(fs.readFile)
var gen = function* () {
  var r1 = yield readFileThunk2('testgpu.js')
  console.log(r1.toString())
  var r2 = yield readFileThunk2('testgpu.html')
  console.log(r2.toString())
}
// yield命令用于将程序的执行权移出 Generator 函数，那么就需要一种方法，将执行权再交还给 Generator 函数。
var g = gen()
var r1 = g.next()
r1.value(function (err, data) {
  if (err) {
    throw err
  }
  var r2 = g.next(data)
  r2.value(function (err, data) {
    if (err) throw err
    g.next(data)
  })
})

// Thunk 函数的自动流程管理
function run(fn) {
  var gen = fn()
  function next(err, data) {
    var result = gen.next(data)
    if (result.done) {
      return
    }
    result.value(next)
  }
  next()
}
var g = function* () {
  var f1 = yield readFileThunk('webgpu.html')
  var f2 = yield readFileThunk('webgpu.html')
  // ...
  var fn = yield readFileThunk('webgpu.html')
}
// 上面代码中，函数g封装了n个异步的读取文件操作，只要执行run函数，这些操作就会自动完成。这样一来，异步操作不仅可以写得像同步操作，而且一行代码就可以执行。

// Thunk 函数并不是 Generator 函数自动执行的唯一方案。因为自动执行的关键是，必须有一种机制，自动控制 Generator 函数的流程，接收和交还程序的执行权。回调函数可以做到这一点，Promise 对象也可以做到这一点。

run(g)

// co 模块是著名程序员 TJ Holowaychuk 于 2013 年 6 月发布的一个小工具，用于 Generator 函数的自动执行
var co = require('co')
var gen3 = function* () {
  var f1 = yield readFile('/etc/fstab')
  var f2 = yield readFile('/etc/shells')
  console.log(f1.toString())
  console.log(f2.toString())
}
co(gen).then(function(){
  console.log('Generator完成');
})
// co函数返回一个Promise对象，因此可以用then方法添加回调函数。