const express = require('express');
const noticesRouter = express.Router();

const { wrapCtrl } = require('../middlewares/wrapCtrl');

const addNoticeCtrl = require('../controllers/notices/addNotice.controller');
const reqValidation = require('../middlewares/reqValidation');

const noticeAddSchema = require('../validations/notices.validation');
const checkJWT = require('../middlewares/checkJWT');
const {
  noticeListCtrl,
} = require('../controllers/notices/noticeList.controller');
const idValidation = require('../middlewares/idValidation');
const {
  noticeByIdCtrl,
} = require('../controllers/notices/noticeById.controller');

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

module.exports = noticesRouter;
