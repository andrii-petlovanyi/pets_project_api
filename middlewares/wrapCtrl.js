const wrapCtrl = controller => {
  const func = async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      next(error);
    }
  };
  return func;
};
module.exports = { wrapCtrl };

//example use
// router.patch(
//   '/:userId/note',
//   idValidation,
//   reqValidation(changeNoteSchema),
//   wrapCtrl(changeNoteCtrl),
// );
