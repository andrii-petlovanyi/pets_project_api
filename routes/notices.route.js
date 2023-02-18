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
const {
  userNoticeListCtrl,
} = require('../controllers/notices/userNotice.controller');
const uploadPhoto = require('../middlewares/uploadPhoto');

router.get('/', wrapCtrl(noticeListCtrl));
router.get('/owner', checkJWT, wrapCtrl(userNoticeListCtrl));
router.get('/:noticeId', idValidation, wrapCtrl(noticeByIdCtrl));

router.use(checkJWT);
router.post(
  '/',
  uploadPhoto.single('image'),
  reqValidation(noticeAddSchema),
  wrapCtrl(addNoticeCtrl),
);
router.delete('/:noticeId', idValidation, wrapCtrl(deleteNoticeCtrl));

module.exports = router;
