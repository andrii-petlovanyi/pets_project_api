const Joi = require('joi');

const passRegexp = /^(?=.{7,32}$)([0-9A-Za-z])*$/;
const emailRegexp =
  /^[\S]{1}[\S@.]*[a-zA-Z0-9]+@[^\W_]{2,}[^\W_]*(\.[^\W_]{2,})+$/;
const birthDay =
  /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/;

const updateUserSchema = Joi.object({
  name: Joi.string().min(3).max(25).alphanum().optional().messages({
    'string.alphanum': 'Your name must only contain alpha-numeric characters',
    'string.min': `Name length must be at least {{#limit}} characters long`,
    'string.max': `Name length must be at most {{#limit}} characters long`,
  }),
  email: Joi.string().min(7).max(63).optional().pattern(emailRegexp).messages({
    'string.min': `Email length must be at least {{#limit}} characters long`,
    'string.max': `Email length must be at most {{#limit}} characters long`,
    'string.pattern.base': 'Email is must be in format email@domain.com',
  }),
  birthday: Joi.string().pattern(birthDay).optional().messages({
    'string.pattern.base': 'Birthday date must be in format 01.12.1970',
  }),
  phone: Joi.string().min(9).max(15).optional().messages({
    'string.min': `Phone number length must be at least {{#limit}} characters long`,
    'string.max': `Phone number length must be at most {{#limit}} characters long`,
  }),
  city: Joi.string().min(3).max(20).optional().messages({
    'string.min': `City length must be at least {{#limit}} characters long`,
    'string.max': `City length must be at most {{#limit}} characters long`,
  }),
  avatarURL: Joi.string().optional(),
});

const loginSchema = Joi.object({
  password: Joi.string().min(7).max(32).required().messages({
    'any.required': 'Password is required',
    'string.min': `Password length must be at least {{#limit}} characters long`,
    'string.max': `Password length must be at most {{#limit}} characters long`,
  }),
  email: Joi.string().min(7).max(63).required().pattern(emailRegexp).messages({
    'any.required': 'Email is required',
    'string.min': `Email length must be at least {{#limit}} characters long`,
    'string.max': `Email length must be at most {{#limit}} characters long`,
    'string.pattern.base': 'Email is must be in format email@domain.com',
  }),
});

const registerSchema = Joi.object({
  name: Joi.string().min(3).max(25).alphanum().required().messages({
    'any.required': 'Name is required',
    'string.alphanum': 'Your name must only contain alpha-numeric characters',
    'string.min': `Name length must be at least {{#limit}} characters long`,
    'string.max': `Name length must be at most {{#limit}} characters long`,
  }),
  email: Joi.string().min(6).max(63).required().pattern(emailRegexp).messages({
    'any.required': 'Email is required',
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
      'any.required': 'Password is required',
      'string.min': `Password length must be at least {{#limit}} characters long`,
      'string.max': `Password length must be at most {{#limit}} characters long`,
      'string.pattern.base': 'Please use symbols A-z and numbers',
    }),
  phone: Joi.string().min(9).max(15).required().messages({
    'any.required': 'Phone number is required',
    'string.min': `Phone number length must be at least {{#limit}} characters long`,
    'string.max': `Phone number length must be at most {{#limit}} characters long`,
  }),
  city: Joi.string().min(3).max(20).required().messages({
    'any.required': 'City is required',
    'string.min': `City length must be at least {{#limit}} characters long`,
    'string.max': `City length must be at most {{#limit}} characters long`,
  }),
});

const addPetSchema = Joi.object({
  name: Joi.string().min(2).max(32).alphanum().required().messages({
    'any.required': 'Name is required',
    'string.alphanum': 'Pet name must only contain alpha-numeric characters',
    'string.min': `Name length must be at least {{#limit}} characters long`,
    'string.max': `Name length must be at most {{#limit}} characters long`,
  }),
  birth: Joi.string().pattern(birthDay).required().messages({
    'any.required': 'Birthday is required',
    'string.pattern.base': 'Birthday date must be in format 01.12.1970',
  }),
  breed: Joi.string().min(2).max(32).required().messages({
    'any.required': 'Breed is required',
    'string.min': `Breed length must be at least {{#limit}} characters long`,
    'string.max': `Breed length must be at most {{#limit}} characters long`,
  }),
  comment: Joi.string().min(10).max(320).required().messages({
    'any.required': 'City is required',
    'string.min': `Comment length must be at least {{#limit}} characters long`,
    'string.max': `Comment length must be at most {{#limit}} characters long`,
  }),
});

module.exports = {
  updateUserSchema,
  loginSchema,
  registerSchema,
  addPetSchema,
};
