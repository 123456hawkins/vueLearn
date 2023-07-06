/**
 * 
 * String对象是 JavaScript 原生提供的三个包装对象之一，用来生成字符串对象。
 */
var s1 = 'abc';
var s2 = new String('abc');

typeof s1 // "string"
typeof s2 // "object"

s2.valueOf() // "abc"

// charAt方法返回指定位置的字符，参数是从0开始编号的位置。
var s = new String('abc');

s.charAt(1) // "b"
s.charAt(s.length - 1) // "c"

// concat方法用于连接两个字符串，返回一个新字符串，不改变原字符串。
var s1 = 'abc';
var s2 = 'def';

s3=s1.concat(s2) // "abcdef"
console.log(s3);
// toLowerCase方法用于将一个字符串全部转为小写，toUpperCase则是全部转为大写。它们都返回一个新字符串，不改变原字符串。
'Hello World'.toLowerCase()
// "hello world"

'Hello World'.toUpperCase()
// "HELLO WORLD"

// match方法用于确定原字符串是否匹配某个子字符串，返回一个数组，成员为匹配的第一个字符串。如果没有找到匹配，则返回null
var matches = 'cat, bat, sat, fat'.match('at');
matches.index // 1
matches.input // "cat, bat, sat, fat"

// replace方法用于替换匹配的子字符串，一般情况下只替换第一个匹配（除非使用带有g修饰符的正则表达式）。
'aaa'.replace('a', 'b') // "baa"

// split方法按照给定规则分割字符串，返回一个由分割出来的子字符串组成的数组。
'a|b|c'.split('|') // ["a", "b", "c"]

// localeCompare方法用于比较两个字符串。它返回一个整数，如果小于0，表示第一个字符串小于第二个字符串；如果等于0，表示两者相等；如果大于0，表示第一个字符串大于第二个字符串
'apple'.localeCompare('banana') // -1

