const express = require('express');
const router = express.Router();

const {
  listPartnersCtrl,
} = require('../controllers/friends/friendsList.controller');

router.get('/', listPartnersCtrl);

module.exports = router;
