const { register } = require('../../services/users/register.service');

const registerCtrl = async (req, res) => {
  const body = req.body;

  const user = await register(body);
  delete user.password;
  delete user.updatedAt;
  delete user.createdAt;

  res.status(201).json({
    status: 'success',
    code: 201,
    message: 'You are sign up successfully!',
    user,
  });
};

module.exports = registerCtrl;
