const { delMyPet } = require('../../services/users/delMyPet.service');

const delMyPetCtrl = async (req, res) => {
  const petId = req.params.petId;

  const pet = await delMyPet(petId);

  res.status(200).json({
    status: 'success',
    code: 200,
    message: 'Pet added successfully!',
    pet,
  });
};

module.exports = { delMyPetCtrl };
