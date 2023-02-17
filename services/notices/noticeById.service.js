const Notice = require('../../models/notices.model');
const { CustomError } = require('../../helpers/errors');

const noticeById = async noticeId => {
  const noticeById = await Notice.find({ _id: noticeId });

  if (!noticeById) {
    throw new CustomError(`Sorry, but notice with id ${noticeId} not found`);
  }
  return noticeById;
};

module.exports = {
  noticeById,
};
