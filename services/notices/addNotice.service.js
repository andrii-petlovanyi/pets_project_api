const Notice = require('../../models/notices.model');

const addNotice = async (id, body) => {
  const notice = await Notice.create({
    ...body,
    owner: id,
  });
  console.log(notice);

  return notice;
};

module.exports = {
  addNotice,
};
