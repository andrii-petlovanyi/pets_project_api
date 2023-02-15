const express = require('express');
const router = express.Router();
const {
  listPartnersCtrl,
} = require('../controllers/partners/partnersList.controller');
const { wrapCtrl } = require('../middlewares/wrapCtrl');

router.get('/', wrapCtrl(listPartnersCtrl));

module.exports = router;
