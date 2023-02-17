const Notice = require('../../models/notices.model');
const { CustomError } = require('../../helpers/errors');

const deleteNotice = async noticeId => {
  const deleteNotice = await Notice.findOneAndDelete({ _id: noticeId });

  if (!deleteNotice) {
    throw new CustomError(`Sorry, but notice with id ${noticeId} not found`);
  }
  return;
};

module.exports = {
  deleteNotice,
};
