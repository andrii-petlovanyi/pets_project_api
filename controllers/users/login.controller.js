const { login } = require('../../services/users/login.service');

const loginCtrl = async (req, res) => {
  const body = req.body;

  const user = await login(body);

  console.log(user);
  res.status(200).json({
    status: 'success',
    message: 'You are sign in successfully! Welcome!',
    code: 200,
    user,
  });
};

module.exports = { loginCtrl };
