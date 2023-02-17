const express = require('express');
const noticesRouter = express.Router();

const { wrapCtrl } = require('../middlewares/wrapCtrl');

const {
  noticesController,
} = require('../controllers/notices/noticesList.controller');
const {
<<<<<<< Updated upstream
  addNoticeController,
} = require('../controllers/notices/addNotice.controller');
const {
  deleteNoticeById
} = require("../controllers/notices/deleteNoticeById.controller");

noticesRouter.get('/', wrapCtrl(noticesController));
noticesRouter.get('/', wrapCtrl(addNoticeController));
noticesRouter.delete("/:id", wrapCtrl(deleteNoticeById));
=======
  noticeByIdCtrl,
} = require('../controllers/notices/noticeById.controller');
const {
  deleteNoticeByIdCtrl
} = require("../controllers/notices/deleteNoticeById.controller")

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
  wrapCtrl(deleteNoticeByIdCtrl),
);
>>>>>>> Stashed changes

module.exports = noticesRouter;
