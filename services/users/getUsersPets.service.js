const User = require('../../models/user.model');

const getUsersPets = async userId => {
  const pets = await User.find({ owner: userId });
  return pets;
};

module.exports = { getUsersPets };
