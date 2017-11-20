const express = require('express')
const bodyParser = require('body-parser')
const co = require('co')
const file = require('./file')

const app = express()

app.use(bodyParser.json())

app.get('/api/item/:itemid', (req, res) => {
    co(function *() {
        const resultData = yield file.findContent(req.params.itemid)
        const {id, content} = resultData[0]
        res.json({
            id,
            content,
        })
    })
})

app.post('/api/item', (req, res) => {
    file.readContent()
        .then(data => file.writeContent(req.body.content))
        .then(id => {
            res.json({
                id,
            })
        })
})

app.patch('/api/item/:itemid', (req, res) => {
    file.readContent()
        .then(data => file.updateContent(req.params.itemid, req.body.content))
        .then(response => res.send(response))
})

app.delete('/api/item/:itemid', (req, res) => {
    file.readContent()
        .then(data => file.deleteContent(req.params.itemid))
        .then(response => res.send(response))
})

app.listen(3000)