const Partner = require('../../models/partner.model');
const  CustomError  = require('../../helpers/errors');

const getPartners = async () => {
    const result = await Partner.find({});
    if (!result) {
        throw new CustomError('No partners found');
    }
    return result;
};

module.exports = { getPartners };