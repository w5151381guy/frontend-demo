const axios = require('axios')

function getData() {
    return axios
        .get('https://ajax-practice-server.herokuapp.com/random')
        .then(response => response.data)
        .catch(err => console.log(err.response))
}

function resendRequest() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 200)
    })
}

module.exports = {getData, resendRequest}