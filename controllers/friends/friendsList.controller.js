const { wrapCtrl } = require('../../middlewares/wrapCtrl');
const { getPartners } = require('../../services/friends/friendsList.service');

const listPartnersCtrl = async (_, res) => {
  const friends = await getPartners();

  res.json({
    status: 'success',
    code: 200,
    friends,
  });
};

module.exports = {
  listPartnersCtrl: wrapCtrl(listPartnersCtrl),
};
