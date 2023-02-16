const User = require('../../models/user.model');

const myUserPets = async userId => {
  const pets = await User.find({ owner: userId });
  return pets;
};

module.exports = { myUserPets };
