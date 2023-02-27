const { CustomError } = require('../../helpers/errors');
const { deletePhoto } = require('../../middlewares/deletePhoto');
const Pet = require('../../models/pets.model');

const delMyPet = async petId => {
  const deletedPet = await Pet.findOneAndDelete({ _id: petId });

  if (!deletedPet) {
    throw new CustomError(`Sorry, but pet with id ${petId} not found`);
  }

  if (!!deletedPet.avatarURL) {
    deletePhoto(deletedPet.avatarURL);
  }

  return;
};

module.exports = { delMyPet };
