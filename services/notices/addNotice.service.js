const { Notices } = require('../../models/notices.model');

const addNotice = async (id, body) => {
  const notice = await Notices.create({
    ...req.body,
    owner: id,
    email,
    phone,
  });

  return notice;
};

module.exports = {
  addNotice,
};
