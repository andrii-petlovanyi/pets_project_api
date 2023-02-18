const express = require('express');
const router = express.Router();

const { getNewsCtrl } = require('../controllers/news/newsList.controller');

router.get('/', getNewsCtrl);

module.exports = router;
