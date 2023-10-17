// document.defaultView属性返回document对象所属的window对象。如果当前文档不属于window对象，该属性返回null。

document.defaultView === window // true

// document.documentElement属性返回当前文档的根元素节点（root）。它通常是document节点的第二个子节点，紧跟在document.doctype节点后面。HTML网页的该属性，一般是<html>节点。

// document.scrollingElement属性返回文档的滚动元素。也就是说，当文档整体滚动时，到底是哪个元素在滚动。

// document.activeElement属性返回获得当前焦点（focus）的 DOM 元素。通常，这个属性返回的是<input>、<textarea>、<select>等表单元素，如果当前没有焦点元素，返回<body>元素或null。

// document.fullscreenElement属性返回当前以全屏状态展示的 DOM 元素。如果不是全屏状态，该属性返回null。

// document.links属性返回当前文档所有设定了href属性的<a>及<area>节点。

// document.forms属性返回所有<form>表单节点。

// document.images属性返回页面所有<img>图片节点。

// document.scripts属性返回所有<script>节点。

// document.querySelector方法接受一个 CSS 选择器作为参数，返回匹配该选择器的元素节点。如果有多个节点满足匹配条件，则返回第一个匹配的节点。如果没有发现匹配的节点，则返回null

// document.getElementsByTagName()方法搜索 HTML 标签名，返回符合条件的元素。它的返回值是一个类似数组对象（HTMLCollection实例），可以实时反映 HTML 文档的变化。如果没有任何匹配的元素，就返回一个空集。

// document.getElementsByClassName()方法返回一个类似数组的对象（HTMLCollection实例），包括了所有class名字符合指定条件的元素，元素的变化实时反映在返回结果中

// document.getElementsByName()方法用于选择拥有name属性的 HTML 元素（比如<form>、<radio>、<img>、<frame>、<embed>和<object>等），返回一个类似数组的的对象（NodeList实例），因为name属性相同的元素可能不止一个。

// document.getElementById()方法返回匹配指定id属性的元素节点。如果没有发现匹配的节点，则返回null。

// document.elementFromPoint()方法返回位于页面指定位置最上层的元素节点。

// ocument.createElement方法用来生成元素节点，并返回该节点。
