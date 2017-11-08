const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use((req, res, next) => {
  res.locals.startTime = new Date()
  next()
})

app.use(bodyParser.json())

app.post('/api/item', (req, res, next) => {
  res.locals.body = `${req.body.id} in body`
  next()
})

app.get('/api/item/:item', (req, res, next) => {
  res.locals.body = `${req.params.item} in params`
  next()
})

app.get('/api/item', (req, res, next) => {
  res.locals.body = `${req.query.id} in qs`
  next()
})

app.use((req, res, next) => {
  const { body, startTime } = res.locals
  const processTime = `${new Date() - startTime}ms`

  res.json({
    processTime,
    body,
  })
})

app.listen(3000)
