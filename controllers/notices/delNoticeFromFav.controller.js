const {
  deleteNoticeFromFav,
} = require('../../services/notices/deleteNoticeFromFav.service');

const deleteNoticeFromFavCtrl = async (req, res) => {
  const userId = req.user.id;
  const noticeId = req.params.noticeId;

  await deleteNoticeFromFav(userId, noticeId);

  res.status(200).json({
    status: 'success',
    message: `Notice with id ${noticeId} successfully removed from favorites lists!`,
    code: 200,
  });
};
module.exports = { deleteNoticeFromFavCtrl };
