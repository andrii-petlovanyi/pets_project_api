const { updateUser } = require('../../services/users/updateUser.service');

const updateUserInfo = async (req, res, next) => {
  const user = await updateUser(req.user._id, req.body);
  return res.status(200).send({
    email: user.email,
    name: user.name,
    city: user.city,
    birthday: user.birthday,
    phone: user.phone,
    // pets
  });
};

module.exports = { updateUserInfo };
