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

module.exports = {
  schemaUser,
};
