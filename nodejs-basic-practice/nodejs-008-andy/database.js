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
            else resolve(result[0])
        })
    })
}

function insertData(content) {
    return new Promise((resolve, reject) => {
        col.insertOne({content}, (err, result) => {
            if(err) reject(err)
            else resolve(result.insertedId)
        })
    })
}

function updateData(_id, content) {
    return new Promise((resolve, reject) => {
        col.updateOne({'_id': ObjectID(_id)}, {$set: {content}}, (err, result) => {
            if(err) reject(err)
            else resolve()
        })
    })
}

function deleteData(_id) {
    return new Promise((resolve, reject) => {
        col.remove({'_id': ObjectID(_id)}, (err, result) => {
            if(err) reject(err)
            else resolve()
        })
    })
}

module.exports = {getData, insertData, updateData, deleteData}