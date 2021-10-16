const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')
const { loadData } = require('../data/base-data')

const db = async () => {
  try {
    const mongo = await MongoMemoryServer.create()
    const uri = mongo.getUri()
    const mongooseOpts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
    ;(async () => {
      await mongoose.connect(uri, mongooseOpts)
      console.log('« Connected to In-Memory database. Loading base data... »')
      console.log('« ...Loading base data... »')
      await loadData()
      console.log('« Base data loaded to In-Memory database! »')
    })()
  } catch (e) {
    console.log('ERROR', e)
  }
}

module.exports = { db }