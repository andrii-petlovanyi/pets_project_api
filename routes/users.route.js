const express = require('express');
const router = express.Router();
// const multer = require('multer');
// const upload = multer();

const { wrapCtrl } = require('../middlewares/wrapCtrl');
const checkJWT = require('../middlewares/checkJWT');
const {
  updateUserInfo,
} = require('../controllers/users/updateUser.controller');
const reqValidation = require('../middlewares/reqValidation');
const {
  addNoticeToFavCtrl,
  deleteNoticeFromFavCtrl,
} = require('../controllers/users/favorite.controller');
const idValidation = require('../middlewares/idValidation');
const {
  schemaUser,
  loginSchema,
  registerSchema,
} = require('../validations/user.validation');
const { logOutCtrl } = require('../controllers/users/logout.controller');
const registerCtrl = require('../controllers/users/register.controller');
const { loginCtrl } = require('../controllers/users/login.controller');
const currentUserCtrl = require('../controllers/users/currentUser.controller');

router.post('/register', reqValidation(registerSchema), wrapCtrl(registerCtrl));
router.post('/login', reqValidation(loginSchema), wrapCtrl(loginCtrl));

router.use(checkJWT);
router.get('/current', wrapCtrl(currentUserCtrl));
router.get('/logout', wrapCtrl(logOutCtrl));
router.patch('/', reqValidation(schemaUser), wrapCtrl(updateUserInfo));
router.patch(
  '/favorites/:noticeId',
  idValidation,
  wrapCtrl(addNoticeToFavCtrl),
);

router.delete(
  '/favorites/:noticeId',
  idValidation,
  wrapCtrl(deleteNoticeFromFavCtrl),
);
// router.post('/:idUser/pets');
// router.delete('/:idUser/pets');

// router.path('/:idUser');

// router.patch(
//   '/avatars',
//   checkJWT,
//   upload.single('avatar'),
//   async (req, res, next) => {
//     const user = await updateAvatar(req.user.userId, req.file.path);
//     return res.status(200).send({
//       avatarURL: user.avatarURL,
//     });
//   },
// );

module.exports = router;
