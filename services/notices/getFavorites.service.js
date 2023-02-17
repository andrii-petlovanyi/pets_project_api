const User = require('../../models/user.model');

const getFavoritesNotices = async _id => {
  const result = await User.findOne({ _id }, 'favorites').populate({
    path: 'favorites',
    select: '-updatedAt -__v',
  });
  return result;
};

module.exports = { getFavoritesNotices };
