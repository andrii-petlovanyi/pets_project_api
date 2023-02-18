const { wrapCtrl } = require('../../middlewares/wrapCtrl');
const { register } = require('../../services/users/register.service');

const registerCtrl = async (req, res) => {
  const body = req.body;

  const user = await register(body);

  res.status(201).json({
    status: 'success',
    code: 201,
    message: 'You are sign up successfully!',
    user,
  });
};

module.exports = { registerCtrl: wrapCtrl(registerCtrl) };
