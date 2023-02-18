const { wrapCtrl } = require('../../middlewares/wrapCtrl');
const { logOut } = require('../../services/users/logout.service');

const logOutCtrl = async (req, res) => {
  const { id } = req.user;

  await logOut(id);

  res.status(204).json();
};

module.exports = { logOutCtrl: wrapCtrl(logOutCtrl) };
