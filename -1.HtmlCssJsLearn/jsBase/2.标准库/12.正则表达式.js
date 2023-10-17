/**
 *RegExp对象提供正则表达式功能 
 */

//  新建正则表达式有两种方法。一种是使用字面量，以斜杠表示开始和结束。
var regex=/xyz/;
var regex1=new RegExp('xyz')
// 上面两种写法是等价的，都新建了一个内容为xyz的正则表达式对象。
// 它们的主要区别是，第一种方法在引擎编译代码时，就会新建正则表达式
// ，第二种方法在运行时新建正则表达式，所以前者的效率较高。而且，
// 前者比较便利和直观，所以实际应用中，基本上都采用字面量定义正则
// 表达式

/**
 * 实例属性
 */
// RegExp.prototype.ignoreCase：返回一个布尔值，表示是否设置了i修饰符。
// RegExp.prototype.global：返回一个布尔值，表示是否设置了g修饰符。
// RegExp.prototype.multiline：返回一个布尔值，表示是否设置了m修饰符。
// RegExp.prototype.flags：返回一个字符串，包含了已经设置的所有修饰符，按字母排序。

var r=/abc/igm
console.log(r.ignoreCase);
console.log(r.global);
console.log(r.multiline);
console.log(r.flags);

/**
 * 实例方法
 */

// 正则实例对象的test方法返回一个布尔值，表示当前模式是否能匹配参数字符串。
console.log(/hawins/.test('hawkins123'));

// 如果正则表达式带有g修饰符，则每一次test方法都从上一次结束的位置开始向后匹配
// g代表全局匹配标志
// lastindex保存下一次匹配的起始位置
var r=/x/g
var s='-x-x'

console.log(r.lastIndex);
console.log(r.test(s));
console.log(r.lastIndex);
console.log(r.test(s));
console.log(r.lastIndex);
console.log(r.test(s));

// 正则实例对象的exec()方法，用来返回匹配结果。如果发现匹配，就返回一个数组，成员是匹配成功的子字符串，否则返回null
var r1=/s/
var s1='-s-s-s'
var t1=r1.exec(s1)

/***
 * 字符串的实例方法
 */
// 字符串实例对象的match方法对字符串进行正则匹配，返回匹配结果。
console.log(s1.match(r1));

// 字符串对象的search方法，返回第一个满足条件的匹配结果在整个字符串中的位置。如果没有任何匹配，则返回-1
console.log(s1.search(r1));

// 正则表达式如果不加g修饰符，就替换第一个匹配成功的值，否则替换所有匹配成功的值。
'aaa'.replace('a', 'b') // "baa"
'aaa'.replace(/a/, 'b') // "baa"
'aaa'.replace(/a/g, 'b') // "bbb"

// $符号
// $&：匹配的子字符串。
// $`：匹配结果前面的文本。
// $\'：匹配结果后面的文本。
// $n：匹配成功的第n组内容，n是从1开始的自然数。
// $$：指代美元符号$。

console.log('abc'.replace());

// 正则表达式：/(\w+)\s(\w+)/ 是一个正则表达式。这里有两个捕获组（用圆括号括起来的部分）：

// 第一个捕获组 (\w+) 匹配一个或多个连续的字母、数字或下划线字符。
// \s 匹配一个空白字符（例如空格、制表符等）。
// 第二个捕获组 (\w+) 同样匹配一个或多个连续的字母、数字或下划线字符。
// 替换字符串：'$2 $1' 是替换的结果字符串。在替换时，$2 代表第二个捕获组匹配到的内容（即第二个单词），
// $1 代表第一个捕获组匹配到的内容（即第一个单词）。因此，'$2 $1' 将会将第二个单词放在前面，然后加一个空格，再跟上第一个单词。

console.log('hello world'.replace(/(\w+)\s(\w+)/,'$2 $1'));//world hello
console.log('abc'.replace('b', '[$`-$&-$\']'));//a[a-b-c]c

// 这里使用了正则表达式/(\d+)([a-z]+)(\d+)/来匹配字符串中的数字、
// 字母和数字部分，并使用$2来引用第二个匹配组中的字母部分。通过在替换字符串中
// 使用ag$2ag，我们实现了将数字部分替换为ag并保留字母部分的效果。
console.log('123abc456'.replace(/(\d+)([a-z]+)(\d+)/,'ag$2ag'));


//字符串对象的split方法按照正则规则分割字符串，返回一个由分割后的各个部分组成的数组。
// 正则分隔，去除多余的空格
'a,  b,c, d'.split(/, */)
// [ 'a', 'b', 'c', 'd' ]

/**
 * 
 * 
 * /////////匹配规则////////////
 */
//字面量字符
console.log(/dog/.test('old don'));

// 点字符
// 点字符（.）匹配除回车（\r）、换行(\n) 、行分隔符（\u2028）和段分隔符（\u2029）以外的所有字符
console.log(/d.g/.test('old dog'));

// 位置字符
// 位置字符用来提示字符所处的位置，主要有两个字符。
// ^ 表示字符串的开始位置
// $ 表示字符串的结束位置

console.log(/^test/.test('test123'));
console.log(/test$/.test('123test'));

//选择字符
// 竖线符号（|）在正则表达式中表示“或关系”（OR），即cat|dog表示匹配cat或dog。

console.log(/girl|boy/.test('boy123'));

// 转义字符
// \cX 表示Ctrl-[X]，其中的X是A-Z之中任一个英文字母，用来匹配控制字符。
// [\b] 匹配退格键(U+0008)，不要与\b混淆。
// \n 匹配换行键。
// \r 匹配回车键。
// \t 匹配制表符 tab（U+0009）。
// \v 匹配垂直制表符（U+000B）。
// \f 匹配换页符（U+000C）。
// \0 匹配null字符（U+0000）。
// \xhh 匹配一个以两位十六进制数（\x00-\xFF）表示的字符。
// \uhhhh 匹配一个以四位十六进制数（\u0000-\uFFFF）表示的 Unicode 字符。
console.log(/hello\+world/.test('heawfhello+world'));

/***
 * 
 * 字符类
 */

// 比如[xyz] 表示x、y、z之中任选一个匹配。
console.log(/[xuz]/.test('seawfx'));

// 脱字符(^)
// 如果方括号内的第一个字符是[^]，则表示除了字符类之中的字符，其他字符都可
// 以匹配。比如，[^xyz]表示除了x、y、z之外都可以匹配。
console.log(/[^abc]/.test('gggggg'));

// 连字符
// 某些情况下，对于连续序列的字符，连字符（-）用来提供简写形式，表示字符的连续范围。比
// 如，[abc]可以写成[a-c]，[0123456789]可以写成[0-9]，同理[A-Z]表示26个大写字母。
console.log(/[a-z0-9]/.test('123456'));

// 预定义模式
// \d 匹配0-9之间的任一数字，相当于[0-9]。
// \D 匹配所有0-9以外的字符，相当于[^0-9]。
// \w 匹配任意的字母、数字和下划线，相当于[A-Za-z0-9_]。
// \W 除所有字母、数字和下划线以外的字符，相当于[^A-Za-z0-9_]。
// \s 匹配空格（包括换行符、制表符、空格符等），相等于[ \t\r\n\v\f]。
// \S 匹配非空格的字符，相当于[^ \t\r\n\v\f]。
// \b 匹配词的边界。
// \B 匹配非词边界，

console.log(/\W+/.test('123456'));

// 重复类
// 模式的精确匹配次数，使用大括号（{}）表示。{n}表示
// 恰好重复n次，{n,}表示至少重复n次，{n,m}表示重复不少于n次，不多于m次。
console.log(/lo{2}k/.test('look'));

// 量词符
// ? 问号表示某个模式出现0次或1次，等同于{0, 1}。
// * 星号表示某个模式出现0次或多次，等同于{0,}。
// + 加号表示某个模式出现1次或多次，等同于{1,}。
console.log(/t?est/.test('est'));

// 贪婪模式
console.log(/t+/.test('tawefawtttt'));

// 修改符
// 单个修饰符，第一次匹配成功后，正则对象就停止向下匹配了
var regex = /test/i;
// 默认情况下，正则对象区分字母的大小写，加上i修饰符以后表示忽略大小写
console.log(/abc/i.test('ABC') ); // true

// 多个修饰符，正则对象将匹配全部符合条件的结果，主要用于搜索和替换。
var regex = /test/ig;

// m修饰符表示多行模式（multiline），会修改^和$的行为。
// 默认情况下（即不加m修饰符时），^和$匹配字符串的开始处
// 和结尾处，加上m修饰符以后，^和$还会匹配行首和行尾，即^和$会识别换行符（\n）

console.log(/world$/m.test('hello world\n') );// true

// 分组匹配
console.log(/fred+/.test('fredd') );// true
console.log(/(fred)+/.test('fredfred') );// true
var m='abcabc'.match(/(.)b(.)/)
console.log(m);