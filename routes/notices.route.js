const express = require('express');
const noticesRouter = express.Router();
const { wrapCtrl } = require('../middlewares/wrapCtrl');

const {
  noticesController,
} = require('../controllers/notices/noticesList.controller');

noticesRouter.get('/', wrapCtrl(noticesController));

module.exports = noticesRouter;
