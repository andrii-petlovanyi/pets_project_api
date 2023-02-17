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
  addNoticeToFavoritesCtrl,
  deleteNoticeFromFavoritesCtrl,
} = require('../controllers/users/favorite.controller');
const idValidation = require('../middlewares/idValidation');
const {
  schemaUser,
  loginSchema,
  registerSchema,
} = require('../validations/user.validation'); //DIANA
const { logOutCtrl } = require('../controllers/users/logout.controller');
const registerCtrl = require('../controllers/users/register.controller'); //DIANA
const { loginCtrl } = require('../controllers/users/login.controller'); //DIANA

router.patch('/', checkJWT, wrapCtrl(updateUserInfo));
router.patch(
  '/favorites/:idNotice',
  idValidation,
  wrapCtrl(addNoticeToFavoritesCtrl),
);

router.delete(
  '/favorites/:idNotice',
  idValidation,
  wrapCtrl(deleteNoticeFromFavoritesCtrl),
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
router.post('/register', reqValidation(registerSchema), wrapCtrl(registerCtrl));
router.post('/login', reqValidation(loginSchema), wrapCtrl(loginCtrl));
router.get('/logout', checkJWT, wrapCtrl(logOutCtrl));

module.exports = router;
