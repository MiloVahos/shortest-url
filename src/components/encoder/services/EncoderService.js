const shortid = require('shortid')
const UrlModel = require('../models/UrlModel')

const encodeUrl = async (url) => {
  const currentUrl = await UrlModel.findOne({ url })
  if (currentUrl) return { status: 400, message: `This url was already encoded with key ${currentUrl.key}` }
  const id = shortid.generate()
  await UrlModel.create({ key: id, url })
  return { status: 200, key: `http://localhost:${process.env.PORT}/${id}`}
}

const decodeUrl = async (key) => {
  const url = await UrlModel.findOne({ key })
  if (!url) return { status: 404, message: `Not found` }
  return { url: url.url }
}

module.exports = { encodeUrl, decodeUrl }