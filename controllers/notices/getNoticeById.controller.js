const {getById} = require("../../services/notices/getById.service")


const getNoticeByIdController = async (req, res) => {
    const { noticeId: id } = req.params;
    const data = await getById(id);
  
    res.status(200).json({data, status: "success"});
  };

  module.exports = {
    getNoticeByIdController
  };