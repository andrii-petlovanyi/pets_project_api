<<<<<<< Updated upstream
const {Notices} = require("../../models/notices.model")

const deleteNotice = async (noticeId, owner) => {
    const remove = await Notices.findOneAndDelete({ _id: noticeId, owner });

    return remove;
};

module.exports = {
deleteNotice
};
=======
const Notices = require("../../models/notices.model")
const { CustomError } = require('../../helpers/errors');

 const deleteNotice = async (noticeId) => {
    const deleteNotice = await Notices.findOneAndDelete({ _id: noticeId });

    if (!deleteNotice) {
    throw new CustomError(`Sorry, but notice with id ${noticeId} not found`);
    }
    return deleteNotice;
 };

 module.exports = {
 deleteNotice
 };
>>>>>>> Stashed changes
