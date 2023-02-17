const Pet = require('../../models/pets.model');

const addMyPet = async (userId, body) => {
  const pet = await Pet.create({
    ...body,
    owner: userId,
  });

  return pet;
};

module.exports = { addMyPet };
