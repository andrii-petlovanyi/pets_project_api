const { getPartners } = require('../../services/partners/partnersList.service');

const listPartnersControler = async (req, res, next) => {
    try {
        const partners = await getPartners();
        res.json({
        status: 'success',
        code: 200,
        data: {
            partners,
        },
        });
    } catch (error) {
        next(error);
    }
};
    
module.exports = {
    listPartnersControler,
};