const { wrapCtrl } = require('../../middlewares/wrapCtrl');
const { addMyPet } = require('../../services/users/addMyPet.service');

const addMyPetCtrl = async (req, res) => {
  const userId = req.user.id;
  const body = req.body;
  const avatar = req.file;

  const pet = await addMyPet(userId, body, avatar);

  res.status(201).json({
    status: 'success',
    code: 201,
    message: 'Pet added successfully!',
    pet,
  });
};

module.exports = { addMyPetCtrl: wrapCtrl(addMyPetCtrl) };
