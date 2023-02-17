const { addNotice } = require('../../services/notices/addNotice.service');

const addNoticeCtrl = async (req, res) => {
  const { _id: id } = req.user;
  const body = req.body;

  const notice = await addNotice(id, body);

  res.status(201).json(notice);
};

module.exports = addNoticeCtrl;
