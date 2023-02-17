const { addMyPets } = require("../../services/users/addMyPets");
const { deleteMyPets } = require("../../services/users/deleteMyPets");

const addMyPetsCtrl = async (req, res) => {
  const userId = req.user.id;
  const petId = req.params.petId;

  await addMyPets(userId, petId);

  res.status(200).json({
    status: 'success',
    message: `Pet with id ${petId} added successfully to pet lists!`,
    code: 200,
  });
};

const deleteMyPetsCtrl = async (req, res) => {
  const userId = req.user.id;
  const petId = req.params.petId;

  await deleteMyPets(userId, petId);

  res.status(200).json({
    status: 'success',
    message: `Pet with id ${petId} successfully removed from pet lists!`,
    code: 200,
  });
};
module.exports = { addMyPetsCtrl, deleteMyPetsCtrl };

// const { updateUser } = require('../../services/users/updateUser.service');

// const updateMyPetsInfo = async (req, res, next) => {
//   const user = await updateUser(req);
//   return res.status(200).send({
//     name: user.pets.name,
//     birth: user.pets.birth,
//     breed: user.pets.breed,
//     comments: user.pets.comments,
//   });
// };

// module.exports = { updateMyPetsInfo };
