const Joi = require('joi');

const schemaUser = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net', 'org'] },
    })
    .required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  birthday: Joi.number().integer().min(1900).max(2013),
});
//DIANA>>
const loginSchema = Joi.object({
  password: Joi.string()
    .min(7)
    .max(32)
    .required(),
  email: Joi.string()
    .required()
    .pattern(/^[a-zA-Z0-9]+[a-zA-Z0-9_-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$/),
});

const registerSchema = Joi.object({
  password: Joi.string()
    .min(7)
    .max(32)
    .required(),
  repeat_password: Joi.ref("password"),
  email: Joi.string()
    .required()
    .pattern(/^[a-zA-Z0-9]+[a-zA-Z0-9_-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$/),
  name: Joi.string().required(),
  city: Joi.string(),
  phone: Joi.string(),
});
//DIANA<<

module.exports = {
  schemaUser,
  loginSchema,
  registerSchema
};//DIANA
