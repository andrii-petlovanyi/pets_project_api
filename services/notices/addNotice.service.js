const Notice = require('../../models/notices.model');

const addNotice = async (id, body, avatar) => {
  const notice = !!avatar
    ? await Notice.create({
        ...body,
        petImage: avatar.path,
        owner: id,
      })
    : await Notice.create({
        ...body,
        owner: id,
      });

  return notice;
};

module.exports = {
  addNotice,
};
