const express = require('express');
const router = express.Router();

const {
  checkJWT,
  idValidation,
  reqValidation,
  uploadPhoto,
} = require('../middlewares/');
const noticeAddSchema = require('../validations/notices.validation');

const {
  noticeListCtrl,
  userNoticeListCtrl,
  noticeByIdCtrl,
  addNoticeCtrl,
  deleteNoticeCtrl,
} = require('../controllers/notices');

router.get('/', noticeListCtrl);
router.get('/owner', checkJWT, userNoticeListCtrl);
router.get('/:noticeId', idValidation, noticeByIdCtrl);

router.use(checkJWT);
router.post(
  '/',
  uploadPhoto.single('petImage'),
  reqValidation(noticeAddSchema),
  addNoticeCtrl,
);
router.delete('/:noticeId', idValidation, deleteNoticeCtrl);

module.exports = router;
