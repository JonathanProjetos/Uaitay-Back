const joi = require('joi');

const validadeBodyCreateProduct = (body) => {
  const schemaProduct = joi.object({
    name: joi.string().min(5).required().messages({
      'string.empty': '400|O campo "name" não pode ser vazio',
      'any.required': '400|O campo "name" é obrigatório',
      'string.min': '400|O campo "name" deve ter pelo menos 5 caracteres',
    }),
    price: joi.string().min(0).required().messages({
      'number.empty': '400|O campo "price" não pode ser vazio',
      'any.required': '400|O campo "price" é obrigatório',
      'number.min': '400|O campo "price" deve ser maior que zero',
    }),
    category: joi.string().required().messages({
      'string.empty': '400|O campo "category" não pode ser vazio',
      'any.required': '400|O campo "category" é obrigatório',
    }),
  })

  const { error , value } = schemaProduct.validate(body);

  if(error) {
    throw error;
  }
  return value;
}

module.exports = validadeBodyCreateProduct;