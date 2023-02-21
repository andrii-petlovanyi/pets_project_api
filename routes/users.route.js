const express = require('express');
const router = express.Router();

const {
  addNoticeToFavCtrl,
  favNoticesListCtrl,
  deleteNoticeFromFavCtrl,
} = require('../controllers/notices');
const {
  registerCtrl,
  loginCtrl,
  currentUserCtrl,
  logOutCtrl,
  updateUserCtrl,
  delMyPetCtrl,
} = require('../controllers/users');
const { addMyPetCtrl } = require('../controllers/users/addMyPet.controller');
const {
  checkJWT,
  idValidation,
  reqValidation,
  uploadPhoto,
} = require('../middlewares');

const {
  loginSchema,
  registerSchema,
  updateUserSchema,
  addPetSchema,
} = require('../validations/user.validation');

router.post('/register', reqValidation(registerSchema), registerCtrl);
router.post('/login', reqValidation(loginSchema), loginCtrl);

router.use(checkJWT);
router.get('/current', currentUserCtrl);
router.get('/logout', logOutCtrl);
router.patch('/favorites/:noticeId', idValidation, addNoticeToFavCtrl);
router.patch(
  '/',
  uploadPhoto.single('image'),
  reqValidation(updateUserSchema),
  updateUserCtrl,
);
router.get('/favorites', favNoticesListCtrl);
router.delete('/favorites/:noticeId', idValidation, deleteNoticeFromFavCtrl);

router.post(
  '/pets',
  uploadPhoto.single('image'),
  reqValidation(addPetSchema),
  addMyPetCtrl,
);
router.delete('/pets/:petId', idValidation, delMyPetCtrl);

module.exports = router;
