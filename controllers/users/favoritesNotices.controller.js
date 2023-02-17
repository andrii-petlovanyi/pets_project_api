const {
  getFavoritesNotices,
} = require('../../services/notices/getFavorites.service');

const favoritesNoticesController = async (req, res, next) => {
  const { _id } = req.user;

  const favoritesNotices = await getFavoritesNotices(_id);

  return res.status(200).send(favoritesNotices);
};

module.exports = { favoritesNoticesController };
