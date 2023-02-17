const User = require('../../models/user.model');

const getFavoritesNotices = async userId => {
  const user = await User.findOne({ userId });
  const favorites = user.favorites;
  return favorites;
};

module.exports = { getFavoritesNotices };
