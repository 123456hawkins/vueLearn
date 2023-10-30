// 1.用let取代var
// var命令存在变量提升效用，let命令没有这个问题。

// 在let和const之间，建议优先使用const，尤其是在全局环境，不应该设置变量，只应设置常量。
// const优于let有几个原因。一个是const可以提醒阅读程序的人，这个变量不应该改变；另一个
// 是const比较符合函数式编程思想，运算不改变值，只是新建值，而且这样也有利于将来的分布式运算；
// 最后一个原因是 JavaScript 编译器会对const进行优化，所以多使用const，有利于提高程序的运行效率，也就是说let和const的本质区别，其实是编译器内部的处理不同
// good
const a = 1
const b = 2
const c = 3

// best
const [a1, b1, c1] = [1, 2, 3]

// 静态字符串一律使用单引号或反引号，不使用双引号。动态字符串使用反引号
const s1 = 'wfawefa'
// 使用数组成员对变量赋值时，优先使用解构赋值。
const arr = [1, 2, 3]
const [first, second] = arr
console.log(first, second)

// 函数的参数如果是对象的成员，优先使用解构赋值。
// 如果函数返回多个值，优先使用对象的解构赋值，而不是数组的解构赋值。这样便于以后添加返回值，以及更改返回值的顺序。
function getFullName({ firstName, secondName }) {
  return { firstName, secondName }
}
console.log(getFullName({ firstName: '123', secondName: '123' }))

// 单行定义的对象，最后一个成员不以逗号结尾。多行定义的对象，最后一个成员以逗号结尾。
const obj1 = { k1: 'v1', k2: 'v2' }
const obj2 = {
  k1: 'v1',
  k2: 'v2',
}

// 对象尽量静态化，一旦定义，就不得随意添加新的属性。如果添加属性不可避免，要使用Object.assign方法。
Object.assign(obj1, { x: 3 })
const obj = {
  id: 5,
  name: 'sam',
  // [getKey('enable')]: true,
}

// 使用扩展运算符（...）拷贝数组。
const items = [1, 2, 3, 4, 5]
const copyItem = [...items]

// 立即执行函数可以写成箭头函数的形式。
// (()=>{
//   console.log('lijizhixing');
// })()

// 那些使用匿名函数当作参数的场合，尽量用箭头函数代替。因为这样更简洁，而且绑定了 this
// bad
;[1, 2, 3].map(function (x) {
  return x * x
})

// good
;[1, 2, 3].map((x) => {
  return x * x
})

// best
;[1, 2, 3].map((x) => x * x)

// 所有配置项都应该集中在一个对象，放在最后一个参数，布尔值最好不要直接作为参数，因为代码语义会很差，也不利于将来增加其他配置项。
function divide(a, v, option = false) {}
function divide1(a, v, { option = false } = {}) {}

// 注意区分 Object 和 Map，只有模拟现实世界的实体对象时，才使用 Object。如果只是需要key: value的数据结构，使用 Map 结构。因为 Map 有内建的遍历机制。
let map = new Map([
  ['a', 'b'],
  ['a1', 'b1'],
  ['a3', 'b3'],
  ['a4', 'b4'],
])
for (let m of map.keys()) {
  console.log(m)
}

// 总是用 Class，取代需要 prototype 的操作。因为 Class 的写法更简洁，更易于理解。
// bad
function Queue(contents = []) {
  this._queue = [...contents]
}
Queue.prototype.pop = function () {
  const value = this._queue[0]
  this._queue.splice(0, 1)
  return value
}

// good
class Queue1 {
  constructor(contents = []) {
    this._queue = [...contents]
  }
  pop() {
    const value = this._queue[0]
    this._queue.splice(0, 1)
    return value
  }
}

// 使用extends实现继承，因为这样更简单，不会有破坏instanceof运算的危险。

// ES6 模块语法是 JavaScript 模块的标准写法，坚持使用这种写法，取代 Node.js 的 CommonJS 语法。

// 首先，使用import取代require()。
// CommonJS 的写法
const moduleA = require('moduleA')
const func1 = moduleA.func1
const func2 = moduleA.func2

// ES6 的写法
// ESLint 是一个语法规则和代码风格的检查工具，可以用来保证写出语法正确、风格统一的代码。
import { func1, func2 } from 'moduleA'
