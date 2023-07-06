/**
 * Boolean对象是 JavaScript 的三个包装对象之一
 * 。作为构造函数，它主要用于生成布尔值的包装对象实例。
 * 
 */
Boolean(undefined) // false
Boolean(null) // false
Boolean(0) // false
Boolean('') // false
Boolean(NaN) // false

Boolean(1) // true
Boolean('false') // true
Boolean([]) // true
Boolean({}) // true
Boolean(function () {}) // true
Boolean(/foo/) // true