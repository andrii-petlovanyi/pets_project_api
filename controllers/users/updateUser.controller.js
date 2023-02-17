const { updateUser } = require('../../services/users/updateUser.service');

const updateUserInfo = async (req, res) => {
  const { _id } = req.user;
  const body = req.body;

  const updatedUser = await updateUser(_id, body);
  return res.status(200).send({
    status: 'success',
    message: 'Your profile updated successfully!',
    code: 200,
    updatedUser,
  });
};

module.exports = { updateUserInfo };
