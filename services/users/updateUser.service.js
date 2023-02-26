const User = require('../../models/user.model');

const updateUser = async (userId, body, avatar) => {
  const { name, city, birthday, phone } = body;

  const updatedUser = !!avatar
    ? await User.findByIdAndUpdate(
        { _id: userId },
        { ...body, avatarURL: avatar.path },
        { new: true },
      )
        .select('-password -createdAt -updatedAt')
        .exec()
    : await User.findByIdAndUpdate(
        { _id: userId },
        { ...body },
        { new: true },
      )
        .select('-password -createdAt -updatedAt')
        .exec();

  return updatedUser;
};

module.exports = { updateUser };
