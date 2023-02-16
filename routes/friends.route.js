const express = require('express');
const router = express.Router();
const {
  listPartnersCtrl,
} = require('../controllers/friends/friendsList.controller');
const { wrapCtrl } = require('../middlewares/wrapCtrl');

router.get('/', wrapCtrl(listPartnersCtrl));

module.exports = router;
