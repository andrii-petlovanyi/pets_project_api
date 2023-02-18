const Pet = require('../../models/pets.model');

const addMyPet = async (userId, body, avatar) => {
  const pet = !!avatar
    ? await Pet.create({
        ...body,
        avatarURL: avatar.path,
        owner: userId,
      })
    : await Pet.create({
        ...body,
        owner: userId,
      });

  return pet;
};

module.exports = { addMyPet };
