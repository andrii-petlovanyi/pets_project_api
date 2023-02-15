const { logout } = require('../../services/users/logout');

const exitUser = async (req, res, next) => {
  await logout(req.user.userId);
  return res.status(204).send({});
};

module.exports = { exitUser };
