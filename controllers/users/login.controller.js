const { login } = require('../../services/users/login.service');

const loginCtrl = async (req, res) => {
  const body = req.body;

  const user = await login(body);
  delete user.password;

  console.log(user);
  res.status(200).json({
    status: 'success',
    code: 200,
    user,
  });
};

module.exports = { loginCtrl };
