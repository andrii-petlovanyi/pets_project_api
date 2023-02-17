const User = require('../../models/user.model');
const { NotAuthorizedError } = require('../../helpers/errors');
const { generateToken } = require('../../helpers/generateToken');

const login = async ({ email, password }) => {
  const user = await User.findOne({ email });

  if (!user || !user.comparePassword(password))
    throw new NotAuthorizedError('Email or password is wrong');

  const token = generateToken(user);

  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    { token },
    { new: true },
  );

  return updatedUser;
};

module.exports = { login };
