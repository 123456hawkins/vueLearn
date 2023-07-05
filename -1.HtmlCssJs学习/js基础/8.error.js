/****
 * 错误处理机制
 * 
 */
/**
 * 1.Error实例对象必须有message属性，
 * 表示出错时的提示信息，没有提到其他属性。
 * 大多数 JavaScript 引擎，对Error实例还提供name和stack属性，
 * 分别表示错误的名称和错误的堆栈，但它们是非标准的，不是每种
 * 实现都有。
 */
var err=new Error('出错了')
console.log(err.message);

// //查看错误发生的堆栈
// function throwit(){
//   throw new Error('')
// }
// function catchit(){
//   try {
//     throwit()
//   } catch (e) {
//     console.log(e.stack);
//   }
// }
// catchit()

/**
 * 2.原生错误类型
 * 1>SyntaxError对象是解析代码时发生的语法错误。
 * 2>ReferenceError对象是引用一个不存在的变量时发生的错误。
 * 3>RangeError对象是一个值超出有效范围时发生的错误。
 *    主要有几种情况，一是数组长度为负数，二是Number对象的方法
 *    参数超出范围，以及函数堆栈超过最大值。
 * 4>TypeError对象是变量或参数不是预期类型时发生的错误。比如，对
 *     字符串、布尔值、数值等原始类型的值使用new命令，就会抛出这种
 *     错误，因为new命令的参数应该是一个构造函数
 * 
 * 
 */

/**
 * 自定义错误
 */
function UserError(message){
  this.message=message || 'default'
  this.name='hawkinsError'
}
UserError.prototype=new Error()
UserError.prototype.constructor=UserError
// console.log(new UserError('cao'));

/**
 * throw语句
 * 对于 JavaScript 引擎来说，遇到throw语句，程序就中止了。
 * 引擎会接收到throw抛出的信息，可能是一个错误实例，也可能是其
 * 他类型的值
 */
// if (1<2) {
//   throw new UserError('判断错误')
// }

/**
 * try catch语句
 * 一旦发生错误，程序就中止执行了。JavaScript 提供了try...catch
 * 结构，允许对错误进行处理，选择是否往下执行。
 * catch代码块捕获错误之后，程序不会中断，会按照正常流程继续执行下去。
 */
try {
  if (1<2) {
    throw new UserError('大小比较错误')
  }
} catch (error) {
  console.log(error.message);
}

/**
 * finally
 * try...catch结构允许在最后添加一个finally代码块，
 * 表示不管是否出现错误，都必需在最后运行的语句。
 */
try {
  if (1<2) {
    throw new TypeError('类型错误')
  }
} catch (error) {
  console.log(error.message);
}finally{
  console.log('打印finally');
}
//finally的典型使用场景：读文件
openFile();
try {
  writeFile(Data);
} catch(e) {
  handleError(e);
} finally {
  closeFile();
}