const UrlModel = require('../components/encoder/models/UrlModel')
const urlsJson = require('./urls.json')

const loadData = async () => {
  for ( const url of urlsJson ) {
    const res = await UrlModel.create(url)
  }
  console.log(`--- Loaded ${urlsJson.length} urls ---`)
}

module.exports = { loadData }