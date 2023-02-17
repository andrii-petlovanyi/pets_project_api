const User = require('../../models/user.model');
const { NotAuthorizedError } = require('../../helpers/errors');
const { generateToken } = require('../../helpers/generateToken');

const login = async ({ email, password }) => {
  const user = await User.findOne({ email });

  if (!user || !user.comparePassword(password))
    throw new NotAuthorizedError('Email or password is wrong');

  const token = generateToken(user);

  const updatedUser = await User.findOneAndUpdate(user._id, { token })
    .select('-password -createdAt -updatedAt')
    .exec();

  return updatedUser;
};

module.exports = { login };
