const {Notices} = require("../../models/notices.model")

const deleteNotice = async (noticeId, owner) => {
    const remove = await Notices.findOneAndDelete({ _id: noticeId, owner });

    return remove;
};

module.exports = {
deleteNotice
};