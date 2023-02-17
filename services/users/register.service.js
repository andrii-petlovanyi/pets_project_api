const User = require('../../models/user.model');
const { ConflictError } = require('../../helpers/errors');
const { generateToken } = require('../../helpers/generateToken');

const register = async body => {
  const { email } = body;
  const user = await User.findOne({ email });

  if (user) throw new ConflictError(`User with email ${email} is registered`);
  const password = body.password;
  delete body.password;
  const newUser = new User(body);

  newUser.setPassword(password);

  const token = generateToken(newUser);
  newUser.setToken(token);

  await newUser.save();

  const updated = newUser.toObject();
  delete updated.password;
  delete updated.createdAt;
  delete updated.updatedAt;

  return updated;
};

module.exports = { register };
