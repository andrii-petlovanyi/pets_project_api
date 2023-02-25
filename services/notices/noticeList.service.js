const Notice = require('../../models/notices.model');

async function listNotices(page = 1, limit = 10, category = 'sell', search) {
  const notices = search
    ? await Notice.find({
        category,
        title: { $regex: `${search}`, $options: '/i' },
      })
        .sort({ createdAt: -1 })
        .limit(limit)
        .skip((page - 1) * limit)
    : await Notice.find({ category })
        .sort({ createdAt: -1 })
        .limit(limit)
        .skip((page - 1) * limit);

  const totalCount = search
    ? await Notice.count({
        category,
        title: { $regex: `${search}`, $options: '/i' },
      })
    : await Notice.count({ category });

  return { notices, totalCount };
}

module.exports = {
  listNotices,
};
