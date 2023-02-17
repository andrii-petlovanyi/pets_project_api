const { addNotice } = require('../../services/notices/addNotice.service');

const addNoticeCtrl = async (req, res) => {
  const { _id: id } = req.user;
  const body = req.body;

  const notice = await addNotice(id, body);

  res.status(201).json({
    status: 'success',
    message: 'Notice added successfully!',
    code: 201,
    notice,
  });
};

module.exports = addNoticeCtrl;
