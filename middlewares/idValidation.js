const { isValidObjectId } = require('mongoose');
const { CustomError } = require('../helpers/errors');

const idValidation = (req, _, next) => {
  const { userId } = req.params;
  const { petId } = req.params;
  const { noticeId } = req.params;

  const resultUser = isValidObjectId(userId);
  const resultPet = isValidObjectId(petId);
  const resultNotice = isValidObjectId(noticeId);

  if (!resultUser && !resultPet && !resultNotice) {
    next(new CustomError('Invalid id format'));
  }
  next();
};

module.exports = { idValidation };
