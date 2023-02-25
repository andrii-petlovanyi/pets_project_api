const User = require('../../models/user.model');

const updateUser = async (userId, body, avatar) => {
  const { name, email, birthday, phone, city } = body;

  const updatedUser = !!avatar
    ? await User.findByIdAndUpdate(
        { _id: userId },
        { name, email, birthday, phone, city, avatarURL: avatar.path },
        { new: true },
      )
        .select('-password -createdAt -updatedAt')
        .exec()
    : await User.findByIdAndUpdate(
        { _id: userId },
        { name, email, birthday, phone, city },
        { new: true },
      )
        .select('-password -createdAt -updatedAt')
        .exec();

  return updatedUser;
};

module.exports = { updateUser };
