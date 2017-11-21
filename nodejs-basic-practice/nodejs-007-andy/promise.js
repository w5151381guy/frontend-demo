const utils = require('./utils')

let count = 0

let promise = Promise.resolve()

for(let i = 0; i < 5; i++) {
    promise = promise.then(utils.getData).then(res_msg => {
        count++
        console.log(res_msg)
        if(res_msg === 'Hello World') return Promise.reject('finish')
        return utils.resendRequest()
    })
}

promise
    .then(res => 'can not get')
    .catch(res => res === 'finish' ? count : res)
    .then(output => console.log(output))