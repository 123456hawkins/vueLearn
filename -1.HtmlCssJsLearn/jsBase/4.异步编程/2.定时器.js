/***
 * 
 * 定时器
 */
// setTimeout()
// setTimeout函数用来指定某个函数或某段代码，在多少毫秒之后执行。它返回一个整数，表示定时器的编号，以后可以用来取消这个定时器。
for (let i = 0; i < 6; i++) {
  
  setTimeout((i) => {
    console.log('caonima',i);
  }, 900);
  
}
setTimeout(() => {
  console.log('00000000000000');
}, 100);
// setTimeout函数接受两个参数，第一个参数func|code是将要推迟执行的函数名或者一段代码，第二个参数delay是推迟执行的毫秒数。

// 除了前两个参数，setTimeout还允许更多的参数。它们将依次传入推迟执行的函数（回调函数）。
setTimeout(function(a,b){
  console.log(a+b);
}, 1000,1,1);

// setInterval
// setInterval函数的用法与setTimeout完全一致，区别仅仅在于setInterval指定某个任务每隔一段时间就执行一次，
// 也就是无限次的定时执行。
setInterval(() => {
  console.log('setInterval');
}, 500);

// setInterval函数的用法与setTimeout完全一致，区别仅仅在于setInterval指定某个任务每隔一段时间就执行一次，也就是无限次的定时执行。
var id1 = setTimeout(f, 1000);
var id2 = setInterval(f, 1000);

clearTimeout(id1);
clearInterval(id2);

// debounce函数，如果用户连续击键，就会连续触发keydown事件，造成大量的 Ajax 通信。这是不必要的，而且很可能产生性能问题。

// 设置一个门槛值，表示两次 Ajax 通信的最小间隔时间。如果在间隔时间内，发生新的keydown事件，则不触发 Ajax 通信，并且重新开始计时。如果过了指定时间，没有发生新的keydown事件，再将数据发送出去。
$('textarea').on('keydown', debounce(ajaxAction, 2500));

function debounce(fn, delay){
  var timer = null; // 声明计时器
  return function() {
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}


// 运行机制
// setTimeout和setInterval的运行机制，是将指定的代码移出本轮事件循环，等到下一轮事件循环，再检查是否到了指定时间。如果到了，就执行对应的代码；如果不到，就继续等
setTimeout(someTask, 100);
veryLongTask();
// 上面代码的setTimeout，指定100毫秒以后运行一个任务。但是，如果后面的veryLongTask函数（同步任务）运行时间非常长，过了100毫秒还无法结束，那么被推迟运行的someTask就只有等着，等到veryLongTask运行结束，才轮到它执行。


// setTimeout(f, 0)会在下一轮事件循环一开始就执行。
