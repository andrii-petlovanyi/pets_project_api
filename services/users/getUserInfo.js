const User = require('../../models/user.model');

const getUserInfo = async userId => {
  const user = await User.findOne({ userId });
  return user;
};

module.exports = { getUserInfo };
