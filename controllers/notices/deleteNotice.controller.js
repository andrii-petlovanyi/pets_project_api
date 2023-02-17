const { deleteNotice } = require('../../services/notices/deleteNotice.service');

const deleteNoticeCtrl = async (req, res) => {
  const { noticeId } = req.params;
  const { id: userId } = req.user;

  await deleteNotice(noticeId, userId);

  return res.status(200).json({
    status: 'success',
    message: 'Notice was deleted successfully!',
    code: 200,
  });
};

module.exports = {
  deleteNoticeCtrl,
};
