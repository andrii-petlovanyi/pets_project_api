const { logout } = require('../../services/users/logout.service');

const logoutCtrl = async (req, res, next) => {
  await logout(req.user.userId);

  return res.status(204).send({});
};

module.exports = { logoutCtrl };
