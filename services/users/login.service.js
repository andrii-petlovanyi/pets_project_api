const User = require('../../models/user.model');
const { NotAuthorizedError } = require('../../helpers/errors');
const { generateToken } = require('../../helpers/generateToken');
const Pet = require('../../models/pets.model');

const login = async ({ email, password }) => {
  const user = await User.findOne({ email }).populate('pets');

  if (!user || !user.comparePassword(password))
    throw new NotAuthorizedError('Email or password is wrong');

  const token = generateToken(user);

  const updatedUser = await User.findOneAndUpdate(
    user._id,
    { accessToken: token },
    { new: true },
  )
    .select('-password -createdAt -updatedAt')
    .populate('pets')
    .exec();

  return { updatedUser };
};

module.exports = { login };
