const Joi = require('joi');

const categoryList = ['lost-found', 'for-free', 'sell'];
const sexList = ['male', 'female'];

const noticeAddSchema = Joi.object({
  category: Joi.string()
    .valid(...categoryList)
    .required(),
  title: Joi.string().min(2).max(48).required(),
  petName: Joi.string().min(2).max(16),
  birth: Joi.date(),
  breed: Joi.string().min(2).max(24),
  petSex: Joi.string()
    .valid(...sexList)
    .required(),
  location: Joi.string().required(),
  price: Joi.number(),
  petImage: Joi.string(),
  comments: Joi.string().min(8).max(120),
});

module.exports = noticeAddSchema;
