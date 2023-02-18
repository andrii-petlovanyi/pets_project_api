const express = require('express');
const router = express.Router();

const { wrapCtrl } = require('../middlewares/wrapCtrl');
const checkJWT = require('../middlewares/checkJWT');
const {
  updateUserInfo,
} = require('../controllers/users/updateUser.controller');
const reqValidation = require('../middlewares/reqValidation');
const idValidation = require('../middlewares/idValidation');
const {
  loginSchema,
  registerSchema,
  updateUserSchema,
} = require('../validations/user.validation');
const { logOutCtrl } = require('../controllers/users/logout.controller');
const registerCtrl = require('../controllers/users/register.controller');
const { loginCtrl } = require('../controllers/users/login.controller');
const currentUserCtrl = require('../controllers/users/currentUser.controller');
const {
  favNoticesListCtrl,
} = require('../controllers/notices/favNoticesList.controller');
const {
  addNoticeToFavCtrl,
} = require('../controllers/notices/addNoticeToFav.controller');
const {
  deleteNoticeFromFavCtrl,
} = require('../controllers/notices/delNoticeFromFav.controller');
const { addMyPetCtrl } = require('../controllers/users/addMyPet.controller');
const { delMyPetCtrl } = require('../controllers/users/delMyPet.controller');
const uploadPhoto = require('../middlewares/uploadPhoto');

router.post('/register', reqValidation(registerSchema), wrapCtrl(registerCtrl));
router.post('/login', reqValidation(loginSchema), wrapCtrl(loginCtrl));

router.use(checkJWT);
router.get('/current', wrapCtrl(currentUserCtrl));
router.get('/logout', wrapCtrl(logOutCtrl));
router.patch(
  '/favorites/:noticeId',
  idValidation,
  wrapCtrl(addNoticeToFavCtrl),
);
router.patch(
  '/',
  uploadPhoto.single('image'),
  reqValidation(updateUserSchema),
  wrapCtrl(updateUserInfo),
);
router.get('/favorites', wrapCtrl(favNoticesListCtrl));
router.delete(
  '/favorites/:noticeId',
  idValidation,
  wrapCtrl(deleteNoticeFromFavCtrl),
);

router.post('/pets', uploadPhoto.single('image'), wrapCtrl(addMyPetCtrl));
router.delete('/pets/:petId', idValidation, wrapCtrl(delMyPetCtrl));

module.exports = router;
