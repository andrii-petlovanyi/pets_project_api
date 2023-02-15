const Notices = require('../../models/notices.model');

async function listNotices(page, limit, category) {
  const notices = await Notices.find(category, { __v: 0 })
    .limit(limit)
    .skip((page - 1) * limit);
  return notices;
}

module.exports = {
  listNotices,
};
