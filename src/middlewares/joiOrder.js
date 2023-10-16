const joi = require('joi');

//.regex(/^([01][0-9]|2[0-3]):[0-5][0-9]$/) 00:00 - 23:59
//.regex(/^\d{2}-\d{2}-\d{4}$/) 00-00-0000

const validateBodyCreateOrder = (body) => {

  const schema = joi.object({
    date: joi.string().regex(/^\d{2}-\d{2}-\d{4}$/).required().messages({
      'any.required': '400|O campo "date" é obrigatório',
      'string.empty': '400|O campo "date" não pode ser vazio',
      'string.pattern.base': '400|O campo "date" deve ter o formato "dd-mm-aaaa"'
    }),
    hours: joi.string().required().regex(/^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/).messages({
      'any.required': '400|O campo "hours" é obrigatório',
      'string.empty': '400|O campo "hours" não pode ser vazio',
      'string.pattern.base': '400|O campo "hours" deve ter o formato hh:mm:ss'
    }),
    order: joi.array().items(
      joi.object({
        _id: joi.string().required().messages({
          'any.required': '400|O campo "_id" dentro da array order é obrigatório',
          'string.empty': '400|O campo "_id" dentro da array order não pode ser vazio'
        }),
        name: joi.string().required().messages({
          'any.required': '400|O campo "name" dentro da array order é obrigatório',
          'string.empty': '400|O campo "name" dentro da array order não pode ser vazio'
        }),
        price: joi.number().required().messages({
          'any.required': '400|O campo "price" dentro da array order é obrigatório',
          'string.empty': '400|O campo "price" dentro da array order não pode ser vazio'
        }),
        category: joi.string().required().messages({
          'any.required': '400|O campo "category" dentro da array order é obrigatório',
          'string.empty': '400|O campo "category" dentro da array order não pode ser vazio'
        }),
      })
    ).required().messages({
      'any.required': '400|O campo "order" é obrigatório',
      'string.empty': '400|O campo "order" não pode ser vazio'
    }),
    total: joi.number().required().messages({
      'any.required': '400|O campo "total" é obrigatório',
      'string.empty': '400|O campo "total" não pode ser vazio'
    }),
  });

  const { error, value } = schema.validate(body);

  if(error) {
    throw error;
  }

  return value;
}

module.exports = {
  validateBodyCreateOrder
}