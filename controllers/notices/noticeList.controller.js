const { listNotices } = require('../../services/notices/noticeList.service');

async function noticeListCtrl(req, res) {
  const notices = await listNotices(page, limit, category);

  res.status(200).json({ notices, status: 'success' });
}

module.exports = {
  noticeListCtrl,
};
