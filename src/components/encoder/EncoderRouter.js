const { Router } = require('express')
const { validateSchemaBody, validateSchemaParams } = require('../../middlewares/Validators')
const { catchErrors } = require('../../middlewares/ErrorHandler')
const { postEncode, getDecode } = require('./controllers/EncodeController')
const encodeSchema = require('./schemas/encodeSchema')
const decodeSchema = require('./schemas/decodeSchema')

const router = Router()

router.post(
  '/encode',
  validateSchemaBody(encodeSchema),
  catchErrors(postEncode)
)

router.get(
  '/:key',
  validateSchemaParams(decodeSchema),
  catchErrors(getDecode)
)

module.exports = router