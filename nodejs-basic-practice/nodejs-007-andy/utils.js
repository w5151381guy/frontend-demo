const axios = require('axios')
let msg = []
function getData() {
    return axios
        .get('https://ajax-practice-server.herokuapp.com/random')
        .then(response => response.data)
        .catch(err => console.log(err.response))
}

function compare(response_msg) {
    msg.push(response_msg)
    console.log(msg)
    return response_msg === "Hello World" ? `send ${msg.length} time(s) to get Hello World` : resendRequest()
}

function resendRequest() {
    if(msg.length > 5) return "can not get Hello World"
    else {
        setTimeout(() => {
            getData()
                .then(compare)
        }, 200)
    }
}

module.exports = {getData, compare}