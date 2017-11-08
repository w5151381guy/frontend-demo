const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.use((req, res, next) => {
    const start = process.hrtime()
    res.locals.startTime = start
    next()
})

app.use('/api/item', (req, res, next) => {
    const processTime = process.hrtime(res.locals.start)
    res.locals.processTime = processTime[1]
    next()
})

app.get('/api/item', (req, res) => {
    res.json({
        processTime: `${res.locals.processTime / 1000000}ms`,
        body: `${req.query.id} in qs`
    })
})

app.post('/api/item', (req, res) => {
    res.json({
        processTime: `${res.locals.processTime / 1000000}ms`,
        body: `${req.body.id} in body`
    })
})

app.listen(3000)