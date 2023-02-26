const Joi = require('joi');

const categoryList = ['lost-found', 'for-free', 'sell'];
const sexList = ['male', 'female'];
const birthDay =
  /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/;
const location = /^\w+,\s*\w+$/;

const noticeAddSchema = Joi.object({
  category: Joi.string()
    .valid(...categoryList)
    .required()
    .messages({
      'any.required': 'Category is required',
      'any.only': `Category must be one of [${categoryList.join(', ')}]`,
    }),
  title: Joi.string().min(2).max(120).required().messages({
    'any.required': 'Title is required',
    'string.min': `Title length must be at least {{#limit}} characters long`,
    'string.max': `Title length must be at most {{#limit}} characters long`,
  }),
  petName: Joi.string().min(2).max(16).messages({
    'string.alphanum': 'Pet name must only contain alpha-numeric characters',
    'string.min': 'Pet name must be at least {{#limit}} characters long',
    'string.max': 'Pet name cannot be longer than {{#limit}} characters',
  }),
  birth: Joi.string().messages({
    'string.pattern.base': 'Birthday is must be in format 01.12.1970',
  }),
  breed: Joi.string().min(2).max(56).messages({
    'string.min': 'Pet breed must be at least {{#limit}} characters long',
    'string.max': 'Pet breed cannot be longer than {{#limit}} characters',
  }),
  petSex: Joi.string()
    .valid(...sexList)
    .required()
    .messages({
      'any.required': 'Pet sex is required',
      'any.only': `Category must be one of [${sexList.join(', ')}]`,
    }),
  location: Joi.string().min(2).max(32).required().pattern(location).messages({
    'any.required': 'Location is required',
    'string.pattern.base': 'Location is must be in format: City, Region',
    'string.min': 'Location must be at least {{#limit}} characters long',
    'string.max': 'Location cannot be longer than {{#limit}} characters',
  }),
  price: Joi.number(),
  petImage: Joi.string(),
  comments: Joi.string().min(8).max(400).messages({
    'string.min': 'Comment must be at least {{#limit}} characters long',
    'string.max': 'Comment cannot be longer than {{#limit}} characters',
  }),
});

module.exports = noticeAddSchema;
