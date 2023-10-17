function isPrime(num) {
  if (num <= 1) {
    return false
  }
  if (num <= 3) {
    return true
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false
  }
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false
  }
  return true
}
self.addEventListener('message', function (e) {
  const data = e.data
  const { start, end } = data
  const arr = []
  let primeCount = 0
  for (let i = start; i < end; i++) {
    if (isPrime(i)) {
      arr.push(i)
      primeCount++
    }
  }
  this.self.postMessage({ primeCount: primeCount, arr: arr })
})
