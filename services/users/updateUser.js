const User = require('../../models/user.model');

const updateUser = async req => {
  const { name, city, birthday, phone } = req.body;
  const user = await User.findByIdAndUpdate(
    { userId: req.userId },
    { name, city, birthday, phone },
    { new: true },
  );
  return user;
};

module.exports = { updateUser };
