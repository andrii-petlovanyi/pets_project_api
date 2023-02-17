const Notice = require('../../models/notices.model');
const { CustomError } = require('../../helpers/errors');

const noticeById = async (noticeId, userId) => {
  const noticeById = await Notice.find({ _id: noticeId, owner: userId });

  if (!noticeById) {
    throw new CustomError(`Sorry, but notice with id ${noticeId} not found`);
  }
  return noticeById;
};

module.exports = {
  noticeById,
};
