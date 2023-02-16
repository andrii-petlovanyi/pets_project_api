const { getUserInfo } = require('../../services/users/getUserInfo');
const { getUsersPets } = require('../../services/users/getUsersPets');

const userInfo = async (req, res, next) => {
  const user = await getUserInfo(req);
  const usersPets = await getUsersPets(req);

  // const user = req.user;

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
      usersPets,
    });
  }
};

module.exports = { userInfo };
