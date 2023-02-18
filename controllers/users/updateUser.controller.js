const { wrapCtrl } = require('../../middlewares/wrapCtrl');
const { updateUser } = require('../../services/users/updateUser.service');

const updateUserCtrl = async (req, res) => {
  const { _id } = req.user;
  const body = req.body;
  const avatar = req.file;

  const updatedUser = await updateUser(_id, body, avatar);

  return res.status(200).send({
    status: 'success',
    message: 'Your profile updated successfully!',
    code: 200,
    updatedUser,
  });
};

module.exports = { updateUserCtrl: wrapCtrl(updateUserCtrl) };
