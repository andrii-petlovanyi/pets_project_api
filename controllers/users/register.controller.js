const { UserScheme } = require("../../models/user.model");
const { errorsHandler } = require("../../helpers/errorHandler");
const { generateTokens } = require("../../helpers/generateToken");

const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const dotenv = require("dotenv");
dotenv.config();

const register = async (req, res) => {
  const { email, password, name, city, phone } = req.body;
  const user = await UserScheme.findOne({ email });
  if (user) {
    errorsHandler(" Email in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const avatarUrl = gravatar.url(email);

  const newUser = await UserScheme.create({
    email,
    password: hashPassword,
    avatarUrl,
    name,
    city,
    phone,
  });
  
  const { accessToken } = await generateTokens(newUser._id);

  await UserScheme.findByIdAndUpdate(newUser._id, { accessToken });
  res.status(201).json({
    user: {
      id: newUser._id,
      email: newUser.email,
      name: newUser.name,
    },
    accessToken,
  });
};

module.exports = { register };
