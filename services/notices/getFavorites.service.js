const User = require('../../models/user.model');

const favNoticesList = async (_id, page, limit, search) => {
  const notices = search
    ? await User.findOne({ _id }, 'favorites').populate({
        path: 'favorites',
        match: { $text: { $search: search } },
        select: '-updatedAt -__v',
        options: { limit: limit, skip: (page - 1) * limit },
      })
    : await User.findOne({ _id }, 'favorites').populate({
        path: 'favorites',
        select: '-updatedAt -__v',
        options: { limit: limit, skip: (page - 1) * limit },
      });
  return notices;
};

module.exports = { favNoticesList };
