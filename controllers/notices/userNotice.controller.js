const {
  userNoticesList,
} = require('../../services/notices/userNotices.service');

const userNoticeListCtrl = async (req, res) => {
  const { _id } = req.user;
  const { page, limit, search } = req.query;

  const notices = await userNoticesList(_id, page, limit, search);

  return res.status(200).send({
    status: 'success',
    code: 200,
    notices,
  });
};

module.exports = { userNoticeListCtrl };
