const express = require('express');
const router = express.Router();

const { getNoticeByIdController} = require('../controllers/notices/getNoticeById.controller');

const { wrapCtrl } = require('../middlewares/wrapCtrl');

router.get('/:noticeId', wrapCtrl(getNoticeByIdController));

module.exports = router;
