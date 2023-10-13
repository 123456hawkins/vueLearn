const tick = performance.now()
const jobs = Array.from({ length: 100 }, () => 1e9)
let completeWorkers = 0
chunks.forEach((data, i) => {
  const worker = new Worker('./worker.js')
  worker.postMessage(data)
  worker.on('message', () => {
    console.log(`Worker ${i} completed`)
    completeWorkers++
    if (completeWorkers == concurrentWorkers) {
      console.log(
        `${concurrentWorkers}workers took ${performance.now() - tick} ms`
      )
      process.exit()
    }
  })
})

