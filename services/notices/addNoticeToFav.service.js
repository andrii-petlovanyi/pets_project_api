const User = require('../../models/user.model');

const addNoticeToFav = async (userId, noticeId) => {
  await User.findByIdAndUpdate(
    { _id: userId },
    { $push: { favorites: noticeId } },
    { new: true },
  );
  return;
};

module.exports = { addNoticeToFav };
