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
  res
    .status(200)
    .json({ message: `Notice is successfully added!`, statusCode: 200 });
};

const deleteNoticeFromFavoritesCtrl = async (req, res) => {
  const userId = req.user.id;
  const noticeId = req.params.noticeId;

  await deleteNoticeFromFavorites(userId, noticeId);

  res.status(200).json({ message: 'Notice deleted from favorite' });
};
module.exports = { addNoticeToFavoritesCtrl, deleteNoticeFromFavoritesCtrl };
