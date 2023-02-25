const User = require('../../models/user.model');

const favNoticesList = async (_id, page, limit, search) => {
  const noticesQuery = search
    ? {
        favorites: {
          $elemMatch: {
            $text: { $search: search, $options: '/i' },
          },
        },
      }
    : {};

  const totalCountQuery = await User.findOne({ _id })
    .populate({
      path: 'favorites',
      match: noticesQuery,
    })
    .select('favorites')
    .lean();

  const totalCount = totalCountQuery.favorites.length;

  const notices = await User.findOne({ _id }, 'favorites')
    .populate({
      path: 'favorites',
      match: noticesQuery,
      select: '-updatedAt -__v',
      options: {
        limit: limit,
        skip: (page - 1) * limit,
        sort: { createdAt: -1 },
      },
    })
    .lean();

  return {
    notices: notices.favorites,
    totalCount,
  };
};

module.exports = { favNoticesList };
