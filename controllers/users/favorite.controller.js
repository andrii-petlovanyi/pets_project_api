const {
  addNoticeToFavorites,
} = require('../../services/users/addNoticeToFavorites.service');
const {
  deleteNoticeFromFavorites,
} = require('../../services/users/deleteNoticeFromFavorites.service');

const addNoticeToFavoritesCtrl = async (req, res) => {
  const userId = req.user.id;
  const noticeId = req.params.noticeId;

  await addNoticeToFavorites(userId, noticeId);

  res.status(200).json({
    status: 'success',
    message: `Notice with id ${noticeId} added successfully to favorites lists!`,
    code: 200,
  });
};

const deleteNoticeFromFavoritesCtrl = async (req, res) => {
  const userId = req.user.id;
  const noticeId = req.params.noticeId;

  await deleteNoticeFromFavorites(userId, noticeId);

  res.status(200).json({
    status: 'success',
    message: `Notice with id ${noticeId} successfully removed from favorites lists!`,
    code: 200,
  });
};
module.exports = { addNoticeToFavoritesCtrl, deleteNoticeFromFavoritesCtrl };
