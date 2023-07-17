/**
 * 操作 CSS 样式最简单的方法，就是使用网页元素节点的getAttribute()方法、setAttribute()方法和removeAttribute()方法，直接读写或删除网页元素的style属性。
 * 
 */
div.setAttribute(
  'style',
  'background-color:red;' + 'border:1px solid black;'
);


// CSSStyleDeclaration 接口用来操作元素的样式。三个地方部署了这个接口。
// 元素节点的style属性（Element.style）
// CSSStyle实例的style属性
// window.getComputedStyle()的返回值
var divStyle = document.querySelector('div').style;

divStyle.backgroundColor = 'red';
divStyle.border = '1px solid black';
divStyle.width = '100px';
divStyle.height = '100px';
divStyle.fontSize = '10em';