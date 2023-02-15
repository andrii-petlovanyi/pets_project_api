const User = require('../../models/user.model');

const updateAvatar = async (userId, avatarURL) => {
  const user = await User.findByIdAndUpdate(
    { userId },
    { avatarURL },
    { new: true },
  );
  return user;
};

module.exports = { updateAvatar };
