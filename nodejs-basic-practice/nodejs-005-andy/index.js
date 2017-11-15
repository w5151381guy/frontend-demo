const express = require('express')
const bodyParser = require('body-parser')
const file = require('./file')

const app = express()

app.use(bodyParser.json())

app.get('/api/item/:itemid', (req, res) => {
    file.readContent()
	    .then(data => file.findContent(req.params.itemid, data))
        .then(data => {
			const {id, content} = data[0]
	        res.json({
                id,
	            content,
            })
        })
})

app.post('/api/item', (req, res) => {
    file.readContent()
        .then(data => file.writeContent(data, req.body.content))
        .then(id => {
            res.json({
                id,
            })
        })
})

app.patch('/api/item/:itemid', (req, res) => {
    file.readContent()
        .then(data => file.updateContent(data, req.params.itemid, req.body.content))
        .then(response => res.send(response))
})

app.delete('/api/item/:itemid', (req, res) => {
    file.readContent()
        .then(data => file.deleteContent(data, req.params.itemid))
        .then(response => res.send(response))
})

app.listen(3000)