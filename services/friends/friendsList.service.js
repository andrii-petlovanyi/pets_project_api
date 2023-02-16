const Friends = require('../../models/friends.model');
const CustomError = require('../../helpers/errors');

const getPartners = async () => {
  const result = await Friends.find();

  if (!result) {
    throw new CustomError('No partners found');
  }

  return result;
};

module.exports = { getPartners };
