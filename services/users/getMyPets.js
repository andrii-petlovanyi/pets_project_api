const User = require('../../models/user.model');

const getMyPets = async userId => {
  const myPets = await User.find({ owner: userId });
  return myPets;
};

module.exports = { getMyPets };
