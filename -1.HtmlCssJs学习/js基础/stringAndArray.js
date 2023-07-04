var s='hello'
// 返回字符串索引值
console.log(s[1]);
// 返回字符串长度
console.log(s[2]);

// 字符集
var s='\u00A5'
console.log(s);
console.log(s.length);

// Base64编码
// 文本里面包含一些不可打印的符号，比如 ASCII 码0到31的符号都无法打印出来，这时可以使用 Base64 编码，将它们转成可以打印的字符
// 所谓 Base64 就是一种编码方法，可以将任意值转成 0～9、A～Z、a-z、+和/这64个字符组成的可打印字符。
// 使用它的主要目的，不是为了加密，而是为了不出现特殊字符，简化程序的处理。
var s1='hello world'
btoa(s1)//编码
atob('SGVsbG8gV29ybGQh')//解码
btoa('你好') // 报错


// 将非ascii编码转为base64编码
function b64Encode(str) {
  return btoa(encodeURIComponent(str));
}

function b64Decode(str) {
  return decodeURIComponent(atob(str));
}

b64Encode('你好') // "JUU0JUJEJUEwJUU1JUE1JUJE"
b64Decode('JUU0JUJEJUEwJUU1JUE1JUJE') // "你好"