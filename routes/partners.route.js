const express = require('express');
const router = express.Router();
const {  
  listPartnersControler
} = require('../controllers/partners.controller');
const { asyncWrapper } = require('../../helpers/apiHelpers');
// const {
//   updateContactValidation,
//   addContactValidation,
// } = require('../../middlewares/validationMiddleware');





router
  .get('/', asyncWrapper(listPartnersControler))
  

module.exports = router;
