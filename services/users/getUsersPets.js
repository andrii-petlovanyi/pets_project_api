const User = require('../../models/user.model');

const getUsersPets = async userId => {
  const user = await User.find({ owner: userId });
  return user;
};

module.exports = { getUsersPets };
