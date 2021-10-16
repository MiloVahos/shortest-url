const Joi = require('joi')

const decodeSchema = Joi.object({
  key: Joi.string().trim().required().messages({
    'any.required': 'Key is required'
  })
});

module.exports = decodeSchema