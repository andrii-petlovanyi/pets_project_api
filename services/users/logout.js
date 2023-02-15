const User = require('../../models/user.model');

const logout = async userId => {
  const user = await User.findOneAndUpdate(
    { userId },
    {
      token: null,
    },
    { new: true },
  );
  return user;
};

module.exports = { logout };
