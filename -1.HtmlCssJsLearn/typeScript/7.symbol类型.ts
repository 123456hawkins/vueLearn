// 因为unique symbol表示单个值，所以这个类型的变量是不能修改值的，只能用const命令声明，不能用let声明。
const x:unique symbol=Symbol()

// 类型推断