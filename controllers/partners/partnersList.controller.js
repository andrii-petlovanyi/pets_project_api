const { getPartners } = require('../../services/partners/partnersList.service');

const listPartnersCtrl = async (_, res) => {
  const partners = await getPartners();

  res.json({
    status: 'success',
    code: 200,
    data: {
      partners,
    },
  });
};

module.exports = {
  listPartnersCtrl,
};
