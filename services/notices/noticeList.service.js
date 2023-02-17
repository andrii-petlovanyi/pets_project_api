const Notice = require('../../models/notices.model');

async function listNotices(page = 1, limit = 10, category = 'sell', search) {
  const notices = search
    ? await Notice.find(
        { category, title: { $regex: `${search}` } },
        { __v: 0 },
      )
        .limit(limit)
        .skip((page - 1) * limit)
    : await Notice.find({ category }, { __v: 0 })
        .limit(limit)
        .skip((page - 1) * limit);
  return notices;
}

module.exports = {
  listNotices,
};
