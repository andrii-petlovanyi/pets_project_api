const express = require('express');
const noticesRouter = express.Router();

const { wrapCtrl } = require('../middlewares/wrapCtrl');

const {
  noticesController,
} = require('../controllers/notices/noticesList.controller');
const {
  addNoticeController,
} = require('../controllers/notices/addNotice.controller');

noticesRouter.get('/', wrapCtrl(noticesController));
noticesRouter.get('/', wrapCtrl(addNoticeController));

module.exports = noticesRouter;
