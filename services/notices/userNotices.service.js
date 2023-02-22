const Notice = require('../../models/notices.model');

const userNoticesList = async (_id, page = 1, limit = 10, search) => {
  const notices = search
    ? await Notice.find({
        owner: _id,
        title: { $regex: `${search}`, $options: '/i' },
      })
        .limit(limit)
        .skip((page - 1) * limit)
    : await Notice.find({ owner: _id })
        .limit(limit)
        .skip((page - 1) * limit);

  return notices;
};

module.exports = { userNoticesList };
