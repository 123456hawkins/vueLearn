const { rejects } = require('assert')
const co = require('co')
const fs = require('fs')
const { resolve } = require('path')
const stream = fs.createReadStream('testgpu.js')
let valjeanCount = 0
co(function* () {
  while (true) {
    // Node 提供 Stream 模式读写数据，特点是一次只处理数据的一部分，数据分成一块块依次处理，就好像“数据流”一样。这对于处理大规模数据非常有利。Stream 模式使用 EventEmitter API，会释放三个事件。

    // data事件：下一块数据块已经准备好了。
    // end事件：整个“数据流”处理完了。
    // error事件：发生错误。

    // 使用Promise.race()函数，可以判断这三个事件之中哪一个最先发生，只有当data事件最先发生时，才进入下一个数据块的处理。从而，我们可以通过一个while循环，完成所有数据的读取。
    const res = yield Promise.race([
      new Promise((resolve) => stream.once('data', resolve)),
      new Promise((resolve) => stream.once('end', resolve)),
      new Promise((resolve, reject) => stream.once('error', reject)),
    ])
    if (!res) {
      break
    }
    stream.removeAllListeners('data')
    stream.removeAllListeners('end')
    stream.removeAllListeners('error')
    valjeanCount += res.toString().match()
  }
})
