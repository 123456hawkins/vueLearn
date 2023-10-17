const { parenPort } = require('worker_threads')

parenPort.on('message', (jobs) => {
  for (let job of jobs) {
    let count = 0
    for (let i = 0; i < job; i++) {
      count++
    }
  }
  parenPort.postMessage('done')
})


