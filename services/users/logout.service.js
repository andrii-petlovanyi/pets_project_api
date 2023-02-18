const User = require('../../models/user.model');
const { NotAuthorizedError } = require('../../helpers/errors');

const logOut = async id => {
  const user = await User.findByIdAndUpdate(
    id,
    { accessToken: null },
    { runValidators: true },
  );

  if (!user) throw new NotAuthorizedError('Not authorized');

  return;
};

module.exports = { logOut };
