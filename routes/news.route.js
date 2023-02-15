const express = require('express');
const router = express.Router();

const {
  getNewsCtrl,
  getNewsByWordCtrl,
} = require('../controllers/news/newsList.controller');

const wrapCtrl = require('../middlewares/wrapCtrl');

router
  .get('/', wrapCtrl(getNewsCtrl))
  .get('/:word', wrapCtrl(getNewsByWordCtrl));

module.exports = router;
