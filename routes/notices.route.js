const express = require('express');
const noticesRouter = express.Router();

const checkJWT = require('../middlewares/checkJWT');
const { wrapCtrl } = require('../middlewares/wrapCtrl');
const noticeAddSchema = require('../validations/notices.validation');
const reqValidation = require('../middlewares/reqValidation');

const addNoticeCtrl = require('../controllers/notices/addNotice.controller');
const {
  noticeListCtrl,
} = require('../controllers/notices/noticeList.controller');
const idValidation = require('../middlewares/idValidation');
const {
  noticeByIdCtrl,
} = require('../controllers/notices/noticeById.controller');
const {
  deleteNoticeCtrl,
} = require('../controllers/notices/deleteNotice.controller');

noticesRouter.post(
  '/',
  checkJWT,
  reqValidation(noticeAddSchema),
  wrapCtrl(addNoticeCtrl),
);
noticesRouter.get('/', checkJWT, wrapCtrl(noticeListCtrl));
noticesRouter.get(
  '/:noticeId',
  checkJWT,
  idValidation,
  wrapCtrl(noticeByIdCtrl),
);

noticesRouter.delete(
  '/:noticeId',
  checkJWT,
  idValidation,
  wrapCtrl(deleteNoticeCtrl),
);

module.exports = noticesRouter;
