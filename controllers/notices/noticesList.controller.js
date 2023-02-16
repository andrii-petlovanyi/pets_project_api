const { listNotices } = require('../../services/notices/noticeList.service');

async function noticesController(req, res, next) {
  const { page, limit, category } = req.query;

  const notices = await listNotices(page, limit, category);

  res.status(200).json({ notices, status: 'success' });
}

module.exports = {
  noticesController,
};
