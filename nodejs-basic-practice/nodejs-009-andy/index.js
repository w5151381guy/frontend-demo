const express = require('express')
const bodyParser = require('body-parser')
const database = require('./database')

const app = express()

app.use(bodyParser.json())

app.get('/api/item/:itemid', async(req, res) => {
    const resultData = await database.getData(req.params.itemid)
    const {_id, content} = resultData
    res.json({_id,content})
})

app.post('/api/item', async(req, res) => {
    const id = await database.insertData(req.body.content)
    res.json({id})
})

app.patch('/api/item/:itemid', async(req, res) => {
    const response = await database.updateData(req.params.itemid, req.body.content)
    res.json({'ok': true})
})

app.delete('/api/item/:itemid', async(req, res) => {
    const response = await database.deleteData(req.params.itemid)
    res.json({'ok': true})
})

app.listen(3000)