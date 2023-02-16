const User = require('../../models/user.model');

const addNoticeToFavorites = async (userId, noticeId) => {
  await User.findByIdAndUpdate(
    { _id: userId },
    { favorites: noticeId },
    { new: true },
  );
  return;
};

module.exports = { addNoticeToFavorites };
