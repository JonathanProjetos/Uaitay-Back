const joi = require('joi');

const  validadeBodyUser = (body) => {
  const schemaUser = joi.object({
    email: joi.string().email().required().messages({
      'string.email': '400|O campo "email" deve ser um email válido',
      'any.required': '400|The "email" field is mandatory.',
      'any.required': '400|O campo "email" é obrigatório',
    }),
    password: joi.string().min(6).required().messages({
      'string.empty': '400|The "password" field cannot be empty.',
      'any.required': '400|The "password" field is mandatory.',
      'string.min': '400|The "password" field must be at least 6 characters.',
    }),
  }) 

  const { error, value } = schemaUser.validate(body);

  if(error) {
    throw error;
  }
  return value;
}

module.exports = validadeBodyUser;  