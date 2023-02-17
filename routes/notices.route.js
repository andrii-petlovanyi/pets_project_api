const express = require('express');
const noticesRouter = express.Router();

const { wrapCtrl } = require('../middlewares/wrapCtrl');

const {
  noticesController,
} = require('../controllers/notices/noticesList.controller');
const {
  addNoticeController,
} = require('../controllers/notices/addNotice.controller');
const {
  favoritesNoticesController,
} = require('../controllers/notices/favoritesNotices.controller');

noticesRouter.get('/', wrapCtrl(noticesController));
noticesRouter.get('/', wrapCtrl(addNoticeController));
noticesRouter.get('/favorites', wrapCtrl(favoritesNoticesController));

module.exports = noticesRouter;
