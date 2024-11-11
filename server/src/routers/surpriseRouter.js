const surpriseRouter = require('express').Router();
const { Surprise } = require('../../db/models');
const { verifyAccessToken } = require('../middlewares/verifyTokens');

surpriseRouter.route('/').get(async (req, res) => {
  try {
    const allSurprises = await Surprise.findAll();
    res.json(allSurprises);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: error.message, text: 'Ошибка получения всех surprises' });
  }
});

surpriseRouter
  .route('/onesurprise/:surpriseId')
  .get(async (req, res) => {
    try {
      const { surpriseId } = req.params;
      const surprise = await Surprise.findOne({ where: { id: surpriseId } });
      res.json(surprise);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: error.message, text: 'Ошибка получения one-surprise' });
    }
  })
  .patch(verifyAccessToken, async (req, res) => {
    try {
      const { surpriseId } = req.params;
      const { id, balance } = res.locals.user;

      await Surprise.update({ userId: id }, { where: { id: surpriseId } });
      // как изменить balance?
      res.sendStatus(200);
	  
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message, text: 'Ошибка 111' });
    }
  });

//   .delete(async (req, res) => {
//     try {
//       const { id } = req.params;
//       await Surprise.destroy({ where: { id } });
//       res.sendStatus(200); //
//     } catch (error) {
//       console.log(error);
//       res
//         .status(500)
//         .json({ message: error.message, text: 'Ошибка покупки покупки(удаления) surprise' });
//     }
//   });

module.exports = surpriseRouter;
