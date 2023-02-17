const User = require('../../models/user.model');

const updateUser = async (userId, body) => {
  const { name, city, birthday, phone } = body;

  const updatedUser = await User.findByIdAndUpdate(
    { _id: userId },
    { name, city, birthday, phone },
    { new: true },
  )
    .select('-password -createdAt -updatedAt')
    .exec();

  return updatedUser;
};

module.exports = { updateUser };
