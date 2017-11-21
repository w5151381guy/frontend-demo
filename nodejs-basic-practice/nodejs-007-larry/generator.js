const co = require('co')
const { wait, getRandomText } = require('./utils')

co(function*() {
  let count = 0
  while (count < 5) {
    count++
    const text = yield getRandomText()
    console.log(text)
    if (text !== 'Wait') {
      break
    }
  }

  const output = count < 5 ? count : 'can not get'
  console.log(output)
})
