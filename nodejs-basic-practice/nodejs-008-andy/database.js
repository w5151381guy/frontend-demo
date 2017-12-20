const MongoClient = require('mongodb').MongoClient
const config = require('./config')
let db

MongoClient.connect(config.mongoURI, (err, database) => {
    if(err) console.log(err)
    else db = database
})

function getData() {

}

function insertData() {

}

function updateData() {

}

function deleteData() {

}

module.exports = {getData, insertData, updateData, deleteData}