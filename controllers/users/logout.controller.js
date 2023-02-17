const { logOut } = require('../../services/users/logout.service');

const logOutCtrl = async (req, res) => {
  const { id } = req.user;

  await logOut(id);

  res.status(204).json({ message: 'You are log out successfully!' });
};

module.exports = { logOutCtrl };
