const express = require('express');
const router = express.Router();

const { getNews } = require('../controllers/news/newsList.controller');

const wrapCtrl = require('../middlewares/wrapCtrl');

router.get('/', wrapCtrl(getNews));

module.exports = router;
