const {
  getFavoritesNotices,
} = require('../../services/notices/getFavorites.service');

const favoritesNoticesController = async (req, res, next) => {
  const favoritesNotices = await getFavoritesNotices();
  console.log(favoritesNotices);
  return res.status(200).send(favoritesNotices);
};

module.exports = { favoritesNoticesController };
