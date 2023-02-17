const Pet = require('../../models/pets.model');

const current = async _id => {
  const petsList = await Pet.find({ owner: _id });
  return petsList;
};

module.exports = current;
