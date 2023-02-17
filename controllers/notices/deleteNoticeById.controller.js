const {deleteNotice} = require("../../services/notices/deleteNotice.service")
<<<<<<< Updated upstream
const CustomError = require("../../helpers/errors")

const deleteNoticeById = async (req, res) => {
    const { id: notieceId } = req.params;
    const { _id: owner } = req.user;


    const data = await deleteNotice(notieceId, owner);

    if (!data) {
        return CustomError("User's notice with such id not found");
    }

    return res.status(200).json({ message: "successful" });
};
  
module.exports = {
    deleteNoticeById
=======

const deleteNoticeByIdCtrl = async (req, res) => {
    const { noticeId } = req.params;
    const { id: userId } = req.user;
    const data = await deleteNotice(noticeId, userId);


    return res.status(200).json({ message: "successful", data });
};

module.exports = {
    deleteNoticeByIdCtrl
>>>>>>> Stashed changes
};