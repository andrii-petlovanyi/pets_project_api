const { addMyPet } = require('../../services/users/addMyPet.service');

const addMyPetCtrl = async (req, res) => {
  const userId = req.user.id;
  const body = req.body;

  const pet = await addMyPet(userId, body);

  res.status(201).json({
    status: 'success',
    code: 201,
    message: 'Pet added successfully!',
    pet,
  });
};

module.exports = { addMyPetCtrl };
