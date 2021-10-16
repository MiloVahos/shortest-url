const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const urlSchema = new Schema({
  key: { required: true, type: String },
  url: { required: true, type: String }
})

const UrlModel = mongoose.model('Urls', urlSchema)

module.exports = UrlModel