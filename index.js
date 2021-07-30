
const promise = new Promise((resolve, reject) => {
  foo()
  resolve(100)
  reject(new Error('我失败了'))
})

promise.then(val => {
  console.log(val, 123)
}, val => {
  console.log(val, 888)
})
