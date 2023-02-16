const {
  addNoticeToFavorites,
} = require('../../services/users/addNoticeToFavorites.service');

const addNoticeToFavoritesCtrl = async (req, res) => {
  const userId = req.user.id;
  const noticeId = req.params.noticeId;

  await addNoticeToFavorites(userId, noticeId);
  res
    .status(200)
    .json({ message: `Notice is successfully added!`, statusCode: 200 });
};

module.exports = { addNoticeToFavoritesCtrl };
