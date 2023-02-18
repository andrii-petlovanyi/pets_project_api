const { addNoticeCtrl } = require('./addNotice.controller');
const { addNoticeToFavCtrl } = require('./addNoticeToFav.controller');
const { deleteNoticeFromFavCtrl } = require('./delNoticeFromFav.controller');
const { deleteNoticeCtrl } = require('./deleteNotice.controller');
const { favNoticesListCtrl } = require('./favNoticesList.controller');
const { noticeByIdCtrl } = require('./noticeById.controller');
const { noticeListCtrl } = require('./noticeList.controller');
const { userNoticeListCtrl } = require('./userNotice.controller');

module.exports = {
  addNoticeCtrl,
  addNoticeToFavCtrl,
  deleteNoticeCtrl,
  deleteNoticeFromFavCtrl,
  favNoticesListCtrl,
  noticeByIdCtrl,
  noticeListCtrl,
  userNoticeListCtrl,
};
