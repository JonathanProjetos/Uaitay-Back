const joi = require('joi');

//.regex(/^([01][0-9]|2[0-3]):[0-5][0-9]$/) 00:00 - 23:59
//.regex(/^\d{2}-\d{2}-\d{4}$/) 00-00-0000

const schema = joi.object({
  customer: joi.string().required().messages({
    'any.required': '400|O campo "Nome do cliente" é obrigatório',
    'string.empty': '400|O campo "Nome do cliente" não pode ser vazio'
  }),

  address: joi.string().required().messages({
    'any.required': '400|O campo "Endereço" é obrigatório',
    'string.empty': '400|O campo "Endereço" não pode ser vazio'
  }),

  number: joi.number().required().messages({
    'any.required': '400|O campo "Número" é obrigatório',
    'string.empty': '400|O campo "Número" não pode ser vazio'
  }),

  district: joi.string().required().messages({
    'any.required': '400|O campo "Bairro" é obrigatório',
    'string.empty': '400|O campo "Bairro" não pode ser vazio'
  }),

  city: joi.string().required().messages({
    'any.required': '400|O campo "Cidade" é obrigatório',
    'string.empty': '400|O campo "Cidade" não pode ser vazio'
  }),

  complement: joi.string().required().messages({
    'any.required': '400|O campo "Complemento" é obrigatório',
    'string.empty': '400|O campo "Complemento" não pode ser vazio'
  }),

  phone: joi.string().required().messages({
    'any.required': '400|O campo "Telefone" é obrigatório',
    'string.empty': '400|O campo "Telefone" não pode ser vazio'
  }),

  payment: joi.string().required().messages({
    'any.required': '400|O campo "Método de pagamento" é obrigatório',
    'string.empty': '400|O campo "Método de pagamento" não pode ser vazio'
  }),

  discount: joi.string().required().messages({
    'any.required': '400|O campo "Disconto" é obrigatório',
    'string.empty': '400|O campo "Disconto" não pode ser vazio'
  }),

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


const validateBodyCreateOrder = (body) => {

  const { error, value } = schema.validate(body);

  if(error) {
    throw error;
  }

  return value;
}

module.exports = {
  validateBodyCreateOrder
}