// javascript是单线程模型不支持多线程

// 为了利用多核 CPU 的计算能力，HTML5 提出 Web Worker 标准，
// 允许 JavaScript 脚本创建多个线程，但是子线程完全受主线程控制，
// 且不得操作 DOM。所以，这个新标准并没有改变 JavaScript 单线程的
// 本质。


// 可以分成两类：同步任务（synchronous）和异步任务（asynchronous）。
// 同步任务是那些没有被引擎挂起、在主线程上排队执行的任务。只有前一个任务执行完毕，才能执行后一个任务。

// 异步任务是那些被引擎放在一边，不进入主线程、而进入任务队列的任务。只有引擎认为某个异步任务可以执行了
// （比如 Ajax 操作从服务器得到了结果），该任务（采用回调函数的形式）才会进入主线程执行。排在异步任务
// 后面的代码，不用等待异步任务结束会马上运行，也就是说，异步任务不具有“堵塞”效应

// 执行顺序
// 首先，主线程会去执行所有的同步任务。等到同步任务全部执行完，就会去看任务队列里面的异步任务。如果满足条件，那么异步任务就重新进入主线程开始执行，这时它就变成同步任务了。等到执行完，下一个异步任务再进入主线程开始执行。一旦任务队列清空，程序就结束执行。

// 异步任务的写法通常是回调函数。一旦异步任务重新进入主线程，就会执行对应的回调函数。如果一个异步任务没有回调函数，就不会进入任务队列，也就是说，不会重新进入主线程，因为没有用回调函数指定下一步的操作。

// // 4.1回调函数
// function f1(){
//   console.log('f1');
// }
// function f2(){
//   console.log('f2');
// }
// f2(f1)

// // 时间监听
// function f1() {
//   setTimeout(function () {
//     // ...
//     f1.trigger('done');
//   }, 1000);
// }

// 异步操作流程
function async(arg,callback){
  console.log('参数为'+arg+',1秒返回结果');
  // setTimeout是异步的，当执行 setTimeout 时，它会在指定的延迟时间后将回调函数添加到任务队列中，然后继续执行后续代码。
  setTimeout(function(){callback(arg*2)},1000)
}

// async(1,function (value){
//   async(2,function (value){})
// })

// 串行执行
console.log('----------串行执行------------');
var items=[1,2,3,4,5,6,7];
var results=[];

function final(value){
  console.log('完成',value);
}

function series(item) {
  if(item) {
    async( item, function(result) {
      results.push(result);
      return series(items.shift());
    });
  } else {
    return final(results[results.length - 1]);
  }
}

series(items.shift())
console.log('---------------------');

// JavaScript 在执行异步操作时，并不会等待异步操作的完成，而是会继续执行后续代码
// 并行执行
console.log('------------并行---------------');
var items = [ 1, 2, 3, 4, 5, 6 ];
var results = [];
items.forEach(function(item) {
  async(item, function(result){
    results.push(result);
    if(results.length === items.length) {
      final(results[results.length - 1]);
    }
  })
});

// 并行和串行结合

// 所谓并行与串行的结合，就是设置一个门槛，每次最多只能并行执行n个异步任务，这样就避免了过分占用系统资源。


var items = [ 1, 2, 3, 4, 5, 6 ];
var results = [];
var running = 0;
var limit = 2;

function launcher(){
  while (running<limit&&items.length>0) {
    var item=items.shift()
    async(item,function(result){
      result.push(result);
      running--;
      if (items.length>0) {
        launcher()
      }else if(running==0){
        final(results)
      }
    });
    running++;
  }
}

setTimeout(() => {
  launcher()
}, 7000);