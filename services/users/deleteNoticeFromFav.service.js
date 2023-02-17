const { CustomError } = require('../../helpers/errors');
const User = require('../../models/user.model');

const deleteNoticeFromFav = async (userId, noticeId) => {
  const user = await User.findOne({ _id: userId });
  const favorites = user.favorites;

  if (!favorites.includes(noticeId)) {
    throw new CustomError(`Sorry, but notice with id ${noticeId} not found`);
  }
  const newFavorites = favorites.filter(
    fav => fav.toString() !== noticeId.toString(),
  );

  const updatedUser = await User.findOneAndUpdate(
    { _id: userId },
    { favorites: newFavorites },
    { new: true },
  )
    .select('-password -createdAt -updatedAt')
    .exec();
  return updatedUser;
};

module.exports = { deleteNoticeFromFav };
