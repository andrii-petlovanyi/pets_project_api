const { CustomError } = require('../../helpers/errors');
const Pet = require('../../models/pets.model');

const delMyPet = async petId => {
  console.log(petId);
  const deletedPet = await Pet.findOneAndDelete({ _id: petId });

  if (!deletedPet) {
    throw new CustomError(`Sorry, but pet with id ${petId} not found`);
  }

  return;
};

module.exports = { delMyPet };
