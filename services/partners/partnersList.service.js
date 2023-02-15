const Partner = require('../models/partner.model');

const getPartners = async () => {
    const result = await Partner.find({});
    return result;
};

module.exports = { getPartners };