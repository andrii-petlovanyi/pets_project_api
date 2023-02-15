const Partner = require('../../models/partner.model');
const  CustomError  = require('../../helpers/errors');

const getPartners = async () => {
    const result = await Partner.find();
    if (!result) {
        throw new CustomError('No partners found');
    }
    console.log(result);
    return result;

};

module.exports = { getPartners };