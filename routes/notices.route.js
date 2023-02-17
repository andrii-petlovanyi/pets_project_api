const express = require('express');
const router = express.Router();

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

router.get('/', wrapCtrl(noticeListCtrl));
router.get('/:noticeId', idValidation, wrapCtrl(noticeByIdCtrl));

router.use(checkJWT);
router.post('/', reqValidation(noticeAddSchema), wrapCtrl(addNoticeCtrl));
router.delete('/:noticeId', idValidation, wrapCtrl(deleteNoticeCtrl));

module.exports = router;
