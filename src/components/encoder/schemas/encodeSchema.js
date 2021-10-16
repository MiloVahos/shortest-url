const Joi = require('joi')

const encodeSchema = Joi.object({
  url: Joi.string().trim().required().messages({
    'any.required': 'URL is required'
  })
});

module.exports = encodeSchema