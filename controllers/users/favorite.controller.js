const {
  addNoticeToFav,
} = require('../../services/users/addNoticeToFav.service');
const {
  deleteNoticeFromFav,
} = require('../../services/users/deleteNoticeFromFav.service');

const addNoticeToFavCtrl = async (req, res) => {
  const userId = req.user.id;
  const noticeId = req.params.noticeId;

  await addNoticeToFav(userId, noticeId);

  res.status(200).json({
    status: 'success',
    message: `Notice with id ${noticeId} added successfully to favorites lists!`,
    code: 200,
  });
};

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
module.exports = { addNoticeToFavCtrl, deleteNoticeFromFavCtrl };
