/***
 * Mutation Observer API 用来监视 DOM 变动。DOM 的任何变动，比如节点的增减、属性的变动、文本内容的变动，这个 API 都可以得到通知。
 * 
 * Mutation Observer 有以下特点。

它等待所有脚本任务完成后，才会运行（即异步触发方式）。
它把 DOM 变动记录封装成一个数组进行处理，而不是一条条个别处理 DOM 变动。
它既可以观察 DOM 的所有类型变动，也可以指定只观察某一类变动。
 * 
 */
// MutationObserver构造函数，新建一个观察器实例，同时指定这个实例的回调函数。
var observer = new MutationObserver(function (mutations, observer) {
  mutations.forEach(function(mutation) {
    console.log(mutation);
  });
});

// MutationObserver 的实例方法
/**
 * observe()方法用来启动监听，它接受两个参数。

第一个参数：所要观察的 DOM 节点
第二个参数：一个配置对象，指定所要观察的特定变动
 */
var article = document.querySelector('article');

var  options = {
  'childList': true,
  'attributes':true
} ;

observer.observe(article, options);

// disconnect()方法用来停止观察。调用该方法后，DOM 再发生变动，也不会触发观察器。
observer.disconnect();

// takeRecords()方法用来清除变动记录，即不再处理未处理的变动。该方法返回变动记录的数组。
observer.takeRecords();
