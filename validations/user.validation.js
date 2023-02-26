const Joi = require('joi');

const passRegexp = /^(?=.{7,32}$)([0-9A-Za-zа-яА-ЯіІ])*$/;
const emailRegexp =
  /^[\S]{1}[\S@.]*[a-zA-Z0-9]+@[^\W_]{1,}[^\W_]*(\.[^\W_]{2,})+$/;
const birthDay =
  /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/;

const updateUserSchema = Joi.object({
  name: Joi.string().min(3).max(25).messages({
    'string.min': `Name length must be at least {{#limit}} characters long`,
    'string.max': `Name length must be at most {{#limit}} characters long`,
  }),
  email: Joi.string().min(7).max(63).email().messages({
    'string.min': `Email length must be at least {{#limit}} characters long`,
    'string.max': `Email length must be at most {{#limit}} characters long`,
    'string.email': 'email must be in format email@domain.com',
  }),
  birthday: Joi.string().pattern(birthDay).messages({
    'string.pattern.base': 'Birthday date must be in format 01.12.1970',
  }),
  phone: Joi.string().min(13).max(13).messages({
    'string.min': `Phone number length must be at least {{#limit}} characters long`,
    'string.max': `Phone number length must be at most {{#limit}} characters long`,
  }),
  city: Joi.string().min(3).max(20).messages({
    'string.min': `City length must be at least {{#limit}} characters long`,
    'string.max': `City length must be at most {{#limit}} characters long`,
  }),
  avatarURL: Joi.string(),
});

const loginSchema = Joi.object({
  password: Joi.string().min(7).max(32).required().messages({
    'any.required': 'Password is required',
    'string.min': `Password length must be at least {{#limit}} characters long`,
    'string.max': `Password length must be at most {{#limit}} characters long`,
  }),
  email: Joi.string().min(7).max(63).required().email().messages({
    'any.required': 'Email is required',
    'string.min': `Email length must be at least {{#limit}} characters long`,
    'string.max': `Email length must be at most {{#limit}} characters long`,
    'string.email': 'email must be in format email@domain.com',
  }),
});

const registerSchema = Joi.object({
  name: Joi.string().min(3).max(25).required().messages({
    'any.required': 'Name is required',
    'string.min': `Name length must be at least {{#limit}} characters long`,
    'string.max': `Name length must be at most {{#limit}} characters long`,
  }),
  email: Joi.string().min(6).max(63).required().email().messages({
    'any.required': 'Email is required',
    'string.min': `Email length must be at least {{#limit}} characters long`,
    'string.max': `Email length must be at most {{#limit}} characters long`,
    'string.email': 'email must be in format email@domain.com',
  }),
  password: Joi.string()
    .min(7)
    .max(32)
    .required()
    .messages({
      'any.required': 'Password is required',
      'string.min': `Password length must be at least {{#limit}} characters long`,
      'string.max': `Password length must be at most {{#limit}} characters long`,
    }),
  phone: Joi.string().min(13).max(13).required().messages({
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
  name: Joi.string().min(2).max(32).required().messages({
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
  comment: Joi.string().min(8).max(120).required().messages({
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
