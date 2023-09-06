//Promise 对象是 JavaScript 的异步操作解决方案，为异步操作提供统一接口。它起到代理作用（proxy），充当异步操作与回调函数之间的中介，使得异步操作具备同步操作的接口。
// function f1(resolve, reject) {
//   // 异步代码
// }
// var p1 = new Promise(f1)
// Promise 的设计思想是，所有异步任务都返回一个 Promise 实例。Promise 实例有一个then方法，用来指定下一步的回调函数

// 传统写法
// step1(function (value1) {
//   step2(function (value2) {
//     step3(function (value3) {
//       step4(function (value4) {
//         // .....
//       })
//     })
//   })
// })
// Promise写法
// new Promise(step1).then(step2).then(step3).then(step4)


/***
 * 
 * *Promise 对象通过自身的状态，来控制异步操作。
 * Promise 实例具有三种状态
 * 
 * */
// 异步操作未完成（pending）
// 异步操作成功（fulfilled）
// 异步操作失败（rejected）
// 上面三种状态里面，fulfilled和rejected合在一起称为resolved（已定型）。

/***
 * 这三种的状态的变化途径只有两种。

从“未完成”到“成功”
从“未完成”到“失败”

因此，Promise 的最终结果只有两种。

异步操作成功，Promise 实例传回一个值（value），状态变为fulfilled。
异步操作失败，Promise 实例抛出一个错误（error），状态变为rejected

 */

/***
 * Promise构造函数
 */

// var promise=new Promise(function(resolve,reject){
//   if (/**异步成功 */) {
//     // resolve函数的作用是，将Promise实例的状态从“未完成”变为“成功”（即从pending变为fulfilled）
//     resolve(value);
//   }else{
//     // 异步操作失败
//     // reject函数的作用是，将Promise实例的状态从“未完成”变为“失败”（即从pending变为rejected）reject函数的作用是，将Promise实例的状态从“未完成”变为“失败”（即从pending变为rejected）
//     reject(new Error())
//   }
// })

function timeout(ms){
  return new Promise((resolve,reject)=>{
    // 上面代码中，timeout(100)返回一个 Promise 实例。100毫秒以后，该实例的状态会变为fulfilled。
    setTimeout(resolve,ms,'done')
  })
}
timeout(100)


/**
 * then方法可以接受两个回调函数，第一个是异步操作成功时（变为fulfilled状态）的回调函数，第二个是异步操作失败（变为rejected）时的回调函数（该参数可以省略）
 * 
 * 
 */
var p1=new Promise(function(resolve,reject){

  resolve('成功')
})
p1.then(console.log,console.error)

var p2=new Promise(function(resolve,reject){
  reject(new Error('失败'))
})
p2.then(console.log,console.error)
//上面代码中，p1和p2都是Promise 实例，它们的then方法绑定两个回调函数：成功时的回调函数console.log，失败时的回调函数console.error（可以省略）。p1的状态变为成功，p2的状态变为失败，对应的回调函数会收到异步操作传回的值，然后在控制台输出。

p1
  .then(step1)
  .then(step2)
  .then(step3)
  .then(
    console.log,
    console.error
  );

/**上面代码中，p1后面有四个then，意味依次有四个回调函数。只要前一步的状态变为fulfilled，就会依次执行紧跟在后面的回调函数。

最后一个then方法，回调函数是console.log和console.error，用法上有一点重要的区别。console.log只显示step3的返回值，而console.error
可以显示p1、step1、step2、step3之中任意一个发生的错误。举例来说，如果step1的状态变为rejected，那么step2和step3都不会执行了（因为
它们是resolved的回调函数）。Promise 开始寻找，接下来第一个为rejected的回调函数，在上面代码中是console.error。这就是说，Promise 对
象的报错具有传递性。
 * 
 */


/***
 * 微服务
 */
new Promise(function(resolve,reject){
  resolve(1)
}).then(console.log)
console.log(2);

//上面代码会先输出2，再输出1。因为console.log(2)是同步任务，而then的回调函数属于异步任务，一定晚于同步任务执行
// 但是，Promise 的回调函数不是正常的异步任务，而是微任务（microtask）。它们的区别在于，正常任务追加到下一轮事件循环，微任务追加到本轮事件循环。这意味着，微任务的执行时间一定早于正常任务。
setTimeout(function() {
  console.log(1);
}, 0);

new Promise(function (resolve, reject) {
  resolve(2);
}).then(console.log);

console.log(3);

// 运行结果3 2 1
