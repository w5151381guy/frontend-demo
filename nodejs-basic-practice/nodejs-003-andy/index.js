const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.post('/api/item', (req, res) => {
	console.log(req.body)
	res.send(`${req.body.id} in body`)
})

app.get('/api/item/:item', (req, res) => {
	res.send(`${req.params.item} in params`)
})

app.get('/api/item', (req, res) => {
	res.send(`${req.query.id} in qs`)
})

app.listen(3000)