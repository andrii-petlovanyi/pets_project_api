const { UserScheme } = require('../../models/user.model');
const { errorHandler} = require("../../helpers/errorHandler");
const {  generateTokens } = require("../../helpers/generateToken");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  const { email, password } = req.body;
  let user = await UserScheme.findOne({ email });
  if (!user) {
    throw errorHandler(" Email or password invalid"); 
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw errorHandler(" Email or password invalid"); 
  }

  const { accessToken } = await generateTokens(user._id);

  await UserScheme.findByIdAndUpdate(user._id, { accessToken });
  user = await UserScheme.findById(user._id, {
    accessToken: 1,
    email: 1,
    phone: 1,
    _id: 1,
  });

  res.json({
    user,
  });
};

module.exports = { login };
