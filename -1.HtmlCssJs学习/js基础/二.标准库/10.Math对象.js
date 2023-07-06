/**
 * Math是 JavaScript 的原生对象，提供各种数学功能。该对象不是构造函数，不能生成实例，所有的属性和方法都必须在Math对象上调用。
 */

// Math.abs方法返回参数值的绝对值。

Math.abs(1) // 1
Math.abs(-1) // 1

// Math.max方法返回参数之中最大的那个值，Math.min返回最小的那个值。如果参数为空, Math.min返回Infinity, Math.max返回-Infinity。

Math.max(2, -1, 5) // 5
Math.min(2, -1, 5) // -1
Math.min() // Infinity
Math.max() // -Infinity


// Math.floor方法返回小于或等于参数值的最大整数（地板值）。

Math.floor(3.2) // 3
Math.floor(-3.2) // -4
// Math.ceil方法返回大于或等于参数值的最小整数（天花板值）。

Math.ceil(3.2) // 4
Math.ceil(-3.2) // -3

// Math.round方法用于四舍五入。

Math.round(0.1) // 0
Math.round(0.5) // 1
Math.round(0.6) // 1

// Math.pow方法返回以第一个参数为底数、第二个参数为指数的幂运算值。

// 等同于 2 ** 2
Math.pow(2, 2) // 4
// 等同于 2 ** 3
Math.pow(2, 3) // 8

// Math.sqrt方法返回参数值的平方根。如果参数是一个负值，则返回NaN。

Math.sqrt(4) // 2
Math.sqrt(-4) // NaN

// Math.log方法返回以e为底的自然对数值。

Math.log(Math.E) // 1
Math.log(10) // 2.302585092994046

// Math.exp方法返回常数e的参数次方。

Math.exp(1) // 2.718281828459045
Math.exp(3) // 20.085536923187668