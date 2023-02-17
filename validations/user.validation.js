const Joi = require('joi');

const passRegexp = /^(?=.{7,32}$)([0-9A-Za-z])*$/;
const emailRegexp =
  /^(?=.{10,63}$)(([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/;

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

const loginSchema = Joi.object({
  password: Joi.string().min(7).max(32).required().messages({
    'string.min': `Password length must be at least {{#limit}} characters long`,
    'string.max': `Password length must be at most {{#limit}} characters long`,
  }),
  email: Joi.string().min(7).max(63).required().pattern(emailRegexp).messages({
    'string.min': `Email length must be at least {{#limit}} characters long`,
    'string.max': `Email length must be at most {{#limit}} characters long`,
    'string.pattern.base': 'Email is must be in format email@domain.com',
  }),
});

const registerSchema = Joi.object({
  name: Joi.string().min(3).max(25).required().messages({
    'string.min': `Name length must be at least {{#limit}} characters long`,
    'string.max': `Name length must be at most {{#limit}} characters long`,
  }),
  email: Joi.string().pattern(emailRegexp).min(7).max(63).required().messages({
    'string.min': `Email length must be at least {{#limit}} characters long`,
    'string.max': `Email length must be at most {{#limit}} characters long`,
    'string.pattern.base': 'Email is must be in format email@domain.com',
  }),
  password: Joi.string()
    .pattern(passRegexp)
    .min(6)
    .max(32)
    .required()
    .messages({
      'string.min': `Password length must be at least {{#limit}} characters long`,
      'string.max': `Password length must be at most {{#limit}} characters long`,
      'string.pattern.base': 'Please use symbols A-z and numbers',
    }),
  phone: Joi.string().min(9).max(15).required().messages({
    'string.min': `Phone number length must be at least {{#limit}} characters long`,
    'string.max': `Phone number length must be at most {{#limit}} characters long`,
  }),
  city: Joi.string().min(3).max(20).required().messages({
    'string.min': `City length must be at least {{#limit}} characters long`,
    'string.max': `City length must be at most {{#limit}} characters long`,
  }),
});

module.exports = {
  schemaUser,
  loginSchema,
  registerSchema,
};
