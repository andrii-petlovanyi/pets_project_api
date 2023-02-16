const { updateUser } = require('../../services/users/updateUser.service');

const updateUserInfo = async (req, res, next) => {
  const user = await updateUser(req);
  return res.status(200).send({
    email: user.email,
    name: user.name,
    city: user.city,
    birthday: user.birthday,
    phone: user.phone,
  });
};

module.exports = { updateUserInfo };
