const { Notices } = require('../../models/notices.model');

const createNotice = async data => {
  const res = await Notices.create({});

  return res;
};

module.exports = {
  createNotice,
};
