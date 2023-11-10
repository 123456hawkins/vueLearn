// let person = { name: 'hawkins', sex: 'nan' }
// // proxy只支持引用类型(对象，数组,函数,set,map)，基本数据类型不支持
// let pProxy = new Proxy(person, {
//   get() {

//   },
//   set(target, key, value, receiver) {
//     return true
//   },
//   // 拦截函数调用
//   apply() {

//   },
//   // 拦截 in 操作符
//   has() {

//   },
//   // 拦截for in
//   ownKeys() {

//   },
//   // 拦截new
//   construct(target, argArray, newTarget) {

//   },
//   // 拦截delete
//   deleteProperty(target, p) {

//   },

// })

let ren = { name: 'hawkins', sex: 'man', age: 17 }
let renProxy = new Proxy(ren, {
  // target代表目标对象ren，p代表属性名，receiver代表对象renProxy本身
  // 当代理对象被代理是，target不等于receiver
  get(target, p, receiver) {
    if (target.age < 18) {
      console.log('target1', target);
      console.log('receiver1', receiver);
      // reflect帮忙操作对象
      return Reflect.get(target, p, receiver)
    } else {
      return '成年了，不告诉你年龄'
    }
  },
})
let renProxyProxy = new Proxy(renProxy, {
  get(target, p, receiver) {
    console.log('target2', target);
    console.log('receiver2', receiver);
    return Reflect.get(target, p, receiver)
  },
})

// console.log(renProxy.age);
console.log(renProxyProxy.age);

const list: Set<Function> = new Set()
const autorun = (cb: Function) => {
  if (!list.has(cb)) {
    list.add(cb)
  }
}
// 实现观察者模式
const observalbe = <T extends object>(params: T) => {
  return new Proxy(params, {
    set(target, p, newValue, receiver) {
      const result = Reflect.set(target, p, newValue, receiver)
      list.forEach(fn => fn())
      return result
    },
  })
}

const testProxy = observalbe({ name: 'hawkins', attr: 'caonima' })
autorun(() => {//监听
  console.log('发生变化');

})
testProxy.attr = 'caocaocao'