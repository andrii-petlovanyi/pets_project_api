const { noticeById } = require('../../services/notices/noticeById.service');

const noticeByIdCtrl = async (req, res) => {
  const { noticeId } = req.params;
  const { id: userId } = req.user;

  const notice = await noticeById(noticeId, userId);

  res.status(200).json({
    status: 'success',
    code: 200,
    notice,
  });
};

module.exports = {
  noticeByIdCtrl,
};
