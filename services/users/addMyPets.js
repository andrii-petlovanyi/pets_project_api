const User = require('../../models/user.model');

const addMyPets = async (userId, petId) => {
  await User.findByIdAndUpdate(
    { owner: userId },
    { pets: petId },
    { new: true },
  );
  return;
};

module.exports = { addMyPets };
