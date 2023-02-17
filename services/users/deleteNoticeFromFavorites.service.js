const User = require('../../models/user.model');

const deleteNoticeFromFavorites = async (userId, noticeId) => {
  const user = await User.findOneByUserId(userId);
  const favorites = user.favorites;
  const newFavorites = favorites.filter(favorite => favorite !== noticeId);
  return newFavorites;
};

module.exports = { deleteNoticeFromFavorites };
