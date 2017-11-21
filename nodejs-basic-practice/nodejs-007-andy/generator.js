const co = require('co')
const utils = require('./utils')

co(function *() {
    let count = 0
    let res_msg
    for(let i = 0; i < 5; i++) {
        count++
        res_msg = yield utils.getData()
        console.log(res_msg)
        if(res_msg === 'Hello World') break
        yield utils.resendRequest()
    }
    console.log(res_msg === 'Wait' ? 'can not get' : count)
})