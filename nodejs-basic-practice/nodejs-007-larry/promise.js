const { wait, getRandomText } = require('./utils')

let count = 0
let getRandomTextPromise = Promise.resolve()

for (let i = 0; i < 5; i++) {
  getRandomTextPromise = getRandomTextPromise.then(getRandomText).then(text => {
    count++
    if (text !== 'Wait') {
      return Promise.reject('finished')
    }
  })
}

getRandomTextPromise
  .then(() => 'can not get', err => (err === 'finished' ? count : err))
  .then(output => {
    console.log(output)
  })
