const { CustomError } = require('../../helpers/errors');
const User = require('../../models/user.model');

const deleteMyPets = async (userId, petId) => {
  const user = await User.findOne({ _id: userId });
  const pets = user.pets;

  if (!pets.includes(petId)) {
    throw new CustomError(`Sorry, but notice with id ${petId} not found`);
  }
  const newPets = pets.filter(fav => fav.toString() !== petId.toString());

  const updatedUser = await User.findOneAndUpdate(
    { _id: userId },
    { favorites: newPets },
    { new: true },
  )
    .select('-password -createdAt -updatedAt')
    .exec();
  return updatedUser;
};

module.exports = { deleteMyPets };
