/**
 * Event对象
 * 事件发生以后，会产生一个事件对象，作为参数传给监听函数。浏览器原生提供一个Event对象，所有的事件都是这个对象的实例，或者说继承了Event.prototype对象。
 *
 */
// Event对象本身就是一个构造函数，可以用来生成新的实例。

event = new Event(type, options)
// 第一个参数type是字符串，表示事件的名称；第二个参数options是一个对象，表示事件对象的配置。该对象主要有下面两个属性。

// bubbles：布尔值，可选，默认为false，表示事件对象是否冒泡。
// cancelable：布尔值，可选，默认为false，表示事件是否可以被取消，

// Event.bubbles属性返回一个布尔值，表示当前事件是否会冒泡。该属性为只读属性，一般用来了解 Event 实例是否可以冒泡。前面说过，除非显式声明，Event构造函数生成的事件，默认是不冒泡的。
var phase = event.eventPhase
/**
 * Event.eventPhase的返回值有四种可能。

0，事件目前没有发生。
1，事件目前处于捕获阶段，即处于从祖先节点向目标节点的传播过程中。
2，事件到达目标节点，即Event.target属性指向的那个节点。
3，事件处于冒泡阶段，即处于从目标节点向祖先节点的反向传播过程中。
 */

// Event.cancelable属性返回一个布尔值，表示事件是否可以取消。该属性为只读属性，一般用来了解 Event 实例的特性。
var evt = new Event('foo')
evt.cancelable // false
// 如果事件不能取消，调用Event.preventDefault()会没有任何效果。所以使用这个方法之前，最好用Event.cancelable属性判断一下是否可以取消。
function preventEvent(event) {
  if (event.cancelable) {
    event.preventDefault()
  } else {
    console.warn("This event couldn't be canceled.")
    console.dir(event)
  }
}

// Event.type属性返回一个字符串，表示事件类型。事件的类型是在生成事件的时候指定的。该属性只读。
var evt = new Event('foo')
evt.type // "foo"

// Event.timeStamp属性返回一个毫秒时间戳，表示事件发生的时间。它是相对于网页加载成功开始计算的。
var evt = new Event('foo')
evt.timeStamp // 3683.6999999995896

// Event.isTrusted属性返回一个布尔值，表示该事件是否由真实的用户行为产生。比如，用户点击链接会产生一个click事件，该事件是用户产生的；Event构造函数生成的事件，则是脚本产生的。

var evt = new Event('foo')
evt.isTrusted // false

// Event.detail属性只有浏览器的 UI （用户界面）事件才具有。该属性返回一个数值，表示事件的某种信息。具体含义与事件类型相关。比如，对于click和dblclick事件，Event.detail是鼠标按下的次数（1表示单击，2表示双击，3表示三击）；对于鼠标滚轮事件，Event.detail是滚轮正向滚动的距离，负值就是负向滚动的距离，返回值总是3的倍数。
function giveDetails(e) {
  console.log(e.detail)
}

document.querySelector('p').onclick = giveDetails

/***
 * 实例方法
 *
 */
// Event.preventDefault方法取消浏览器对当前事件的默认行为。比如点击链接后，浏览器默认会跳转到另一个页面，使用这个方法以后，就不会跳转了
var cb = document.getElementById('my-checkbox')

cb.addEventListener(
  'click',
  function (e) {
    e.preventDefault()
  },
  false
)

// stopPropagation方法阻止事件在 DOM 中继续传播，防止再触发定义在别的节点上的监听函数，但是不包括在当前节点上其他的事件监听函数。
function stopEvent(e) {
  e.stopPropagation()
}

el.addEventListener('click', stopEvent, false)
// Event.stopImmediatePropagation方法阻止同一个事件的其他监听函数被调用，不管监听函数定义在当前节点还是其他节点。也就是说，该方法阻止事件的传播，比Event.stopPropagation()更彻底。
function l1(e) {
  e.stopImmediatePropagation()
}

function l2(e) {
  console.log('hello world')
}

el.addEventListener('click', l1, false)
el.addEventListener('click', l2, false)

// Event.composedPath()返回一个数组，成员是事件的最底层节点和依次冒泡经过的所有上层节点。
var div = document.querySelector('div')
var p = document.querySelector('p')

div.addEventListener(
  'click',
  function (e) {
    console.log(e.composedPath())
  },
  false
)
