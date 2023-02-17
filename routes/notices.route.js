const express = require('express');
const noticesRouter = express.Router();

const { wrapCtrl } = require('../middlewares/wrapCtrl');

const addNoticeCtrl = require('../controllers/notices/addNotice.controller');
const reqValidation = require('../middlewares/reqValidation');

const noticeAddSchema = require('../validations/notices.validation');
const checkJWT = require('../middlewares/checkJWT');

noticesRouter.post(
  '/',
  checkJWT,
  reqValidation(noticeAddSchema),
  wrapCtrl(addNoticeCtrl),
);

module.exports = noticesRouter;
