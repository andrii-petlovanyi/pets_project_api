const {
  favNoticesList,
} = require('../../services/notices/getFavorites.service');

const favNoticesListCtrl = async (req, res) => {
  const { _id } = req.user;
  const { page, limit, search } = req.query;

  const favoritesNotices = await favNoticesList(_id, page, limit, search);

  return res.status(200).send({
    status: 'success',
    code: 200,
    notices: favoritesNotices,
  });
};

module.exports = { favNoticesListCtrl };
