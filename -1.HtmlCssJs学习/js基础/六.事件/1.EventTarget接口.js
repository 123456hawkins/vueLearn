/***
 * DOM 节点的事件操作（监听和触发），都定义在EventTarget接口。该接口主要提供三个实例方法。

addEventListener()：绑定事件的监听函数
removeEventListener()：移除事件的监听函数
dispatchEvent()：触发事件
 * 
 */

// EventTarget.addEventListener()用于在当前节点或对象上（即部署了 EventTarget 接口的对象），定义一个特定事件的监听函数。一旦这个事件发生，就会执行监听函数。该方法没有返回值。
target.addEventListener(type, listener[, useCapture]);
/**
 * 该方法接受三个参数。

type：事件名称，大小写敏感。
listener：监听函数。事件发生时，会调用该监听函数。
useCapture：布尔值，如果设为true，表示监听函数将在捕获阶段（capture）触发（参见后文《事件的传播》部分）。该参数可选，默认值为false（监听函数只在冒泡阶段被触发）。
 */
element.addEventListener('click', function (event) {
  // 只执行一次的代码
}, {once: true});

// EventTarget.removeEventListener()方法用来移除addEventListener()方法添加的事件监听函数。该方法没有返回值。

div.addEventListener('click', listener, false);
div.removeEventListener('click', listener, false);

// EventTarget.dispatchEvent()方法在当前节点上触发指定事件，从而触发监听函数的执行。该方法返回一个布尔值，只要有一个监听函数调用了Event.preventDefault()，则返回值为false，否则为true。
para.addEventListener('click', hello, false);
var event = new Event('click');
para.dispatchEvent(event);