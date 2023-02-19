const { wrapCtrl } = require('../../middlewares/wrapCtrl');
const { getNews } = require('../../services/news/newsList.service');

const getNewsCtrl = async (req, res) => {
  const { search } = req.query;

  const news = await getNews(search);

  res.status(200).json({ status: `Successfully!`, statusCode: 200, news });
};

module.exports = {
  getNewsCtrl: wrapCtrl(getNewsCtrl),
};
