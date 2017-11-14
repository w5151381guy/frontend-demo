const express = require('express')
const bodyParser = require('body-parser')
const file = require('./file')

const app = express()

app.use(bodyParser.json())

app.get('/api/item/:itemid', (req, res) => {
    file.readContent(req.params.itemid)
	    .then(data => {
			const {id, content} = data[0]
	        res.json({
                id,
	            content,
            })
        })
})

app.post('/api/item', (req, res) => {
    file.writeContent(req.body.content)
        .then(id => {
            res.json({
                id,
            })
        })
})

app.patch('/api/item/:itemid', (req, res) => {
    file.updateContent(req.params.itemid, req.body.content)
        .then(res.json({ok: true}))
})

app.delete('/api/item/:itemid', (req, res) => {
    file.deleteContent(req.params.itemid)
        .then(res.json({ok: true}))
})

app.listen(3000)