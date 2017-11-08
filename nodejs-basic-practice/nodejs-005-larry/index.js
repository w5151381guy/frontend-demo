const express = require('express')
const bodyParser = require('body-parser')
const app = express()

/*
                                                |-> POST /api/item -------|
                                                |                         |
Request -> Start Timer -> Parse Body -> Route --+-> GET /api/item/:item --+--> End Timer -> Respond to client
                                                |                         |
                                                |-> GET /api/item --------|
*/

// Request come in

// Start Timer
app.use((req, res, next) => {
  res.locals.startTime = new Date()
  next()
})

// Parse Body
app.use(bodyParser.json())

/* Route Start */
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
/* Route End */

// End Timer
// Respond to client
app.use((req, res, next) => {
  const { body, startTime } = res.locals
  const processTime = `${new Date() - startTime}ms`

  res.json({
    processTime,
    body,
  })
})

app.listen(3000)
