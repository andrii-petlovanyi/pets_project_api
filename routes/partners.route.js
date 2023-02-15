const express = require('express');
const router = express.Router();
const {  
  listPartnersControler
} = require('../controllers/partners.controller');
const { wrapCtrl } = require('../../middlewares/wrapCtrl');
// const {
//   updateContactValidation,
//   addContactValidation,
// } = require('../../middlewares/validationMiddleware');





router.get('/', wrapCtrl(listPartnersControler));
  

module.exports = router;
