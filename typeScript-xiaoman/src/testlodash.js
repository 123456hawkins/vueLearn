const _ = require('lodash')

// 使用 Lodash 的 map 方法
function mapWithLodash(arr) {
  return _.map(arr, (num) => num * 2)
}

// 使用原生的 for 循环
function mapWithForLoop(arr) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2)
  }
  return result
}

// 生成一个包含 1 到 10^6 的数组
const inputArray = Array.from({ length: 10 ** 6 }, (_, index) => index + 1)

// 使用 Lodash 的 map 方法进行测试
console.time('Lodash Map')
mapWithLodash(inputArray)
console.timeEnd('Lodash Map')

// 使用原生的 for 循环进行测试
console.time('For Loop')
mapWithForLoop(inputArray)
console.timeEnd('For Loop')
