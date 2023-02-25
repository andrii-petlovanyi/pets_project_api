const Notice = require('../../models/notices.model');
const { CustomError } = require('../../helpers/errors');

const noticeById = async noticeId => {
  const noticeById = await Notice.findOne({ _id: noticeId }).populate({
    path: 'owner',
    select: 'email phone',
  });

  if (!noticeById) {
    throw new CustomError(`Sorry, but notice with id ${noticeId} not found`);
  }
  return noticeById;
};

module.exports = {
  noticeById,
};
