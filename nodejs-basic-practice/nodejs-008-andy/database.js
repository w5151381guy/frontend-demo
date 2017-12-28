const {MongoClient, ObjectID} = require('mongodb')
const config = require('./config')
let col

MongoClient.connect(config.mongoURI, (err, database) => {
    if(err) console.log(err)
    else col = database.db('nodejs-practice').collection('practice')
})

function getData(_id) {
    return new Promise((resolve, reject) => {
        col.find(_id).toArray((err, result) => {
            if(err) reject(err)
            else resolve(result)
        })
    })
}

function insertData(content) {
    return new Promise((resolve, reject) => {
        col.insertOne(JSON.parse(JSON.stringify({content})), (err, result) => {
            if(err) reject(err)
            else resolve(result.insertedId)
        })
    })
}

function updateData(_id, content) {
    return new Promise((resolve, reject) => {
        col.updateOne({'_id': ObjectID(_id)}, {$set: JSON.parse(JSON.stringify({content}))}, (err, result) => {
            if(err) reject(err)
            else resolve({ok: 'true'})
        })
    })
}

function deleteData(_id) {
    return new Promise((resolve, reject) => {
        col.remove({'_id': ObjectID(_id)}, (err, result) => {
            if(err) reject(err)
            else resolve({ok: 'true'})
        })
    })
}

module.exports = {getData, insertData, updateData, deleteData}