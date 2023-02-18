const { wrapCtrl } = require('../../middlewares/wrapCtrl');
const { noticeById } = require('../../services/notices/noticeById.service');

const noticeByIdCtrl = async (req, res) => {
  const { noticeId } = req.params;

  const notice = await noticeById(noticeId);

  res.status(200).json({
    status: 'success',
    code: 200,
    notice,
  });
};

module.exports = {
  noticeByIdCtrl: wrapCtrl(noticeByIdCtrl),
};
