const { listNotices } = require('../../services/notices/noticeList.service');

async function noticeListCtrl(req, res) {
  const { page, limit, category, search } = req.query;

  const notices = await listNotices(page, limit, category, search);

  res.status(200).json({
    status: 'success',
    code: 200,
    notices,
  });
}

module.exports = {
  noticeListCtrl,
};
