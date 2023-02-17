const currentUserCtrl = async (req, res) => {
  const user = req.user;
  const resUser = user.toObject();

  delete resUser.password;
  delete resUser.createdAt;
  delete resUser.updatedAt;

  res.status(200).json({
    status: 'success',
    code: 200,
    user: resUser,
  });
};

module.exports = currentUserCtrl;
