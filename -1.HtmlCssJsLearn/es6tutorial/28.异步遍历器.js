// 同步遍历器的问题
function idMaker() {
  let index = 0
  return {
    next: function () {
      return { value: index++, done: false }
    },
  }
}
const it = idMaker()
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)

// 这里隐含着一个规定，it.next()方法必须是同步的，只要调用就必须立刻返回值。也就是说，一旦执行it.next()方法，就必须同步地得到value和done这两个属性。如果遍历指针正好指向同步操作，当然没有问题，但对于异步操作，就不太合适了。

// 异步遍历的接口
// 异步遍历器的最大的语法特点，就是调用遍历器的next方法，返回的是一个 Promise 对象。
async function* createAsyncIterable(arr) {
  for (const item of arr) {
    yield new Promise((resolve) => setTimeout(() => resolve(item), 1000))
  }
}
const asyncIterable = createAsyncIterable(['a', 'b'])
const asyncIterator = asyncIterable[Symbol.asyncIterator]()
asyncIterator
  .next()
  .then((iterResult) => {
    console.log(iterResult)
    return asyncIterator.next()
  })
  .then((iterResult2) => {
    console.log(iterResult2)
    return asyncIterator.next()
  })
  .then((iterResult3) => {
    console.log(iterResult3) // { value: undefined, done: true }
  })

async function f() {
  const asyncIterable1 = createAsyncIterable(['a', 'b'])
  const asyncIterator1 = asyncIterable[Symbol.asyncIterator]()
  console.log(await asyncIterator.next())
  console.log(await asyncIterator.next())
  console.log(await asyncIterator.next())
}
f()

// 前面介绍过，for...of循环用于遍历同步的 Iterator 接口。新引入的for await...of循环，则是用于遍历异步的 Iterator 接口。
async function fawait() {
  for await (const x of createAsyncIterable(['a', 'b'])) {
    console.log(x)
  }
}
fawait()

// 就像 Generator 函数返回一个同步遍历器对象一样，异步 Generator 函数的作用，是返回一个异步遍历器对象。
async function* gen() {
  yield 'hello'
}
const genObj = gen()
genObj.next().then(x=>console.log(x))
