const express = require('express')
const app = express()
app.get('/api/testing', (req, res) => {
    res.send('Hello World GET')
})
app.post('/api/testing', (req, res) => {
    res.send('Hello World POST')
})
app.listen(3000)