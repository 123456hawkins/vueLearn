// es6模块
import { stat, exists, readFile } from 'fs'
import { fs as fs123 } from 'fs'
// 模块的整体加载
import * as fsall from 'fs'

// ES6 的模块自动采用严格模式，不管你有没有在模块头部加上
// 严格模式主要有以下限制。
// 变量必须声明后再使用
// 函数的参数不能有同名属性，否则报错
// 不能使用with语句
// 不能对只读属性赋值，否则报错
// 不能使用前缀 0 表示八进制数，否则报错
// 不能删除不可删除的属性，否则报错
// 不能删除变量delete prop，会报错，只能删除属性delete global[prop]
// eval不会在它的外层作用域引入变量
// eval和arguments不能被重新赋值
// arguments不会自动反映函数参数的变化
// 不能使用arguments.callee
// 不能使用arguments.caller
// 禁止this指向全局对象
// 不能使用fn.caller和fn.arguments获取函数调用的堆栈
// 增加了保留字（比如protected、static和interface）

// export 命令
// 目前，export 命令能够对外输出的就是三种接口：函数（Functions）， 类（Classes），var、let、const 声明的变量（Variables）

// export var firstName='michael'
export { firstName as fn }

// ES2020提案 引入import()函数，支持动态加载模块
// import()返回一个 Promise 对象。下面是一个例子。
import('./testgpu.js')
  .then((module) => {
    module.loadPageInfo(main)
  })
  .catch((err) => {
    main.textContent = err.message
  })
