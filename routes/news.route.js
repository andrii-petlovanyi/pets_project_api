const express = require('express');
const router = express.Router();

const { getNewsCtrl } = require('../controllers/news/newsList.controller');

const wrapCtrl = require('../middlewares/wrapCtrl');

router.get('/', wrapCtrl(getNewsCtrl));

module.exports = router;
