const { encodeUrl, decodeUrl } =  require('../services/EncoderService')

const postEncode = async (req, res) => {
  const { url } = req.body
  const response = await encodeUrl(url)
  res.status(200).json(response)
}

const getDecode = async (req, res) => {
  const { key } = req.params
  const response = await decodeUrl(key)
  res.status(200).json(response)
}

module.exports = { postEncode, getDecode }