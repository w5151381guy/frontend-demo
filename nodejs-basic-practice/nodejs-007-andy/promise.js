const express = require('express')
const utils = require('./utils')

const app = express()

app.get('/', (req, res) => {
    utils.getData()
        .then(utils.compare)
        .then(msg => res.send(msg))
})

app.listen(3000)