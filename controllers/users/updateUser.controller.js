const { updateUser } = require('../../services/users/updateUser');

const updateUserInfo = async (req, res, next) => {
  const user = await updateUser(req);
  if (!user) {
    return res.status(404).json({
      message: 'User not found',
    });
  } else {
    res.status(200).send({
      email: user.email,
      name: user.name,
      city: user.city,
      birthday: user.birthday,
      phone: user.phone,
    });
  }
  return user;
};

module.exports = { updateUserInfo };
