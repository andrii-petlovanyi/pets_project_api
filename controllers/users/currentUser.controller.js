const { wrapCtrl } = require('../../middlewares/wrapCtrl');
const current = require('../../services/users/current.service');

const currentUserCtrl = async (req, res) => {
  const user = req.user;
  const resUser = user.toObject();

  const petsList = await current(user._id);

  resUser.pets = petsList;

  delete resUser.password;
  delete resUser.createdAt;
  delete resUser.updatedAt;

  res.status(200).json({
    status: 'success',
    code: 200,
    user: resUser,
  });
};

module.exports = { currentUserCtrl: wrapCtrl(currentUserCtrl) };
