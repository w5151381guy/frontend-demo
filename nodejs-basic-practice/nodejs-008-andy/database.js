const MongoClient = require('mongodb').MongoClient
const config = require('./config')
let db

MongoClient.connect(config.mongoURI, (err, database) => {
    if(err) console.log(err)
    else db = database
})

function getData(itemid) {
    let col = db.collection('practice')
    return new Promise((resolve, reject) => {
        col.find({'_id': itemid}).toArray((err, result) => {
            if(err) reject(err)
            else resolve(result)
        })
    })
}

function insertData(content) {
    let col = db.collection('practice')
    return new Promise((resolve, reject) => {
        col.insertOne(JSON.stringify({content}), (err, result) => {
            if(err) reject(err)
            else resolve(result._id)
        })
    })
}

function updateData(_id, content) {
    let col = db.collection('practice')
    return new Promise((resolve, reject) => {
        col.updateOne({_id}, {$set: {content}}, (err, result) => {
            if(err) reject(err)
            else resolve({ok: 'true'})
        })
    })
}

function deleteData(_id) {
    let col = db.collection('practice')
    return new Promise((resolve, reject) => {
        col.remove({_id}, (err, result) => {
            if(err) reject(err)
            else resolve({ok: 'true'})
        })
    })
}

module.exports = {getData, insertData, updateData, deleteData}