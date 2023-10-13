const joi = require('joi');

const validadeBodyCreateProduct = (body) => {
  const schemaProduct = joi.object({
    name: joi.string().min(5).required().messages({
      'string.empty': '400|O campo "name" não pode ser vazio',
      'any.required': '400|O campo "name" é obrigatório',
      'string.min': '400|O campo "name" deve ter pelo menos 5 caracteres',
    }),
    price: joi.number().greater(0).required().messages({
      'number.base': '400|O campo "price" deve ser um número',
      'number.empty': '400|O campo "price" não pode ser vazio',
      'any.required': '400|O campo "price" é obrigatório',
      'number.greater': '400|O campo "price" deve ser maior que zero',
    }).strict(),
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

const validadeNameProduct = (name) => {
  const schemaName = joi.string().required().messages({
    'string.empty': '400|O campo "name" não pode ser vazio',
    'any.required': '400|O campo "name" é obrigatório',
  });

  const { error , value } = schemaName.validate(name);

  if(error) {
    throw error;
  }
  return value;
}


const validadeBodyUpdateProduct = (body) => {
  const schemaProduct = joi.object({
    name: joi.string().min(5).required().messages({
      'string.empty': '400|O campo "name" não pode ser vazio',
      'any.required': '400|O campo "name" é obrigatório',
      'string.min': '400|O campo "name" deve ter pelo menos 5 caracteres',
    }),
    price: joi.number().greater(0).required().messages({
      'number.base': '400|O campo "price" deve ser um número',
      'number.empty': '400|O campo "price" não pode ser vazio',
      'any.required': '400|O campo "price" é obrigatório',
      'number.greater': '400|O campo "price" deve ser maior que zero',
    }).strict(),
  })

  const { error , value } = schemaProduct.validate(body);

  if(error) {
    throw error;
  }
  return value;
}



module.exports = {
  validadeBodyCreateProduct,
  validadeNameProduct,
  validadeBodyUpdateProduct
};