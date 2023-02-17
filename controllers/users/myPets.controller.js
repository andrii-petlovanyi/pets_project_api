const { updateUser } = require('../../services/users/updateUser.service');

const updateMyPetsInfo = async (req, res, next) => {
  const user = await updateUser(req);
  return res.status(200).send({
    name: user.pets.name,
    birth: user.pets.birth,
    breed: user.pets.breed,
    comments: user.pets.comments,
  });
};

module.exports = { updateMyPetsInfo };
