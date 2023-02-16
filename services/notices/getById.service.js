const {Notices} = require("../../models/notices.model")
const CustomError = require('../../helpers/errors');

const getById = async (noticeId, owner) => {
  const noticeById = await Notices.findById({ noticeId, owner });

  if (!noticeById) {
    throw new CustomError("notice by id not found");
  }
  return noticeById;
}

module.exports = {
      getById
};