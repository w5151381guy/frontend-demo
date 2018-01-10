const { MongoClient, ObjectID } = require('mongodb')
const config = require('./config')
let col

MongoClient.connect(config.mongoURI, (err, database) => {
  if (err) console.log(err)
  else col = database.db('nodejs-practice').collection('practice')
})

async function getData(_id) {
  try{
    const result = await col.findOne({ _id: ObjectID(_id) })
    return result
  } catch(err) {
    console.log(err)
  }
}

async function insertData(content) {
  try {
    const result = await col.insertOne({ content })
    return result.insertedId
  } catch(err) {
    console.log(err)
  }
}

async function updateData(_id, content) {
  try {
    return await col.updateOne({ _id: ObjectID(_id) }, { $set: { content } })
  } catch(err) {
    console.log(err)
  }
}

async function deleteData(_id) {
  try {
    return await col.findAndRemove({ _id: ObjectID(_id) })
  } catch(err) {
    console.log(err)
  }
}

module.exports = { getData, insertData, updateData, deleteData }
