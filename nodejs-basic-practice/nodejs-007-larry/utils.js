const axios = require('axios')

const url = 'https://ajax-practice-server.herokuapp.com/random'

const getRandomText = () => axios(url).then(res => res.data)

const wait = () => new Promise(resolve => setTimeout(resolve, 200))

module.exports = { getRandomText, wait }
