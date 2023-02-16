const { getUserInfo } = require('../../services/users/getUserInfo.service');
const { getUsersPets } = require('../../services/users/getUsersPets.service');

const userInfo = async (req, res, next) => {
  const user = await getUserInfo(req);
  const usersPets = await getUsersPets(req);
  return res.status(200).send({
    email: user.email,
    name: user.name,
    city: user.city,
    birthday: user.birthday,
    phone: user.phone,
    usersPets,
  });
};

module.exports = { userInfo };
