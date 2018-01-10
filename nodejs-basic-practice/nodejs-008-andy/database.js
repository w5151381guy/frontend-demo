const { MongoClient, ObjectID } = require('mongodb')
const config = require('./config')
let col

MongoClient.connect(config.mongoURI, (err, database) => {
  if (err) console.log(err)
  else col = database.db('nodejs-practice').collection('practice')
})

function getData(_id) {
  return col
    .findOne({ _id: ObjectID(_id) })
    .then(result => result)
    .catch(err => console.log(err))
}

function insertData(content) {
  return col
    .insertOne({ content })
    .then(result => result.insertedId)
    .catch(err => console.log(err))
}

function updateData(_id, content) {
  return col.updateOne({ _id: ObjectID(_id) }, { $set: { content } })
}

function deleteData(_id) {
  return col.findAndRemove({ _id: ObjectID(_id) })
}

module.exports = { getData, insertData, updateData, deleteData }
