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
  deleteNoticeById
} = require("../controllers/notices/deleteNoticeById.controller");

noticesRouter.get('/', wrapCtrl(noticesController));
noticesRouter.get('/', wrapCtrl(addNoticeController));
noticesRouter.delete("/:id", wrapCtrl(deleteNoticeById));


module.exports = noticesRouter;
