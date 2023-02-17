const User = require('../../models/user.model');

const updateUser = async (userId, body) => {
  const { name, city, birthday, phone } = body;

  const user = await User.findByIdAndUpdate(
    { _id: userId },
    { name, city, birthday, phone },
    { new: true },
  );

  return user;
};

module.exports = { updateUser };
