const { getNews } = require('../../services/news/newsList.service');

const getNewsCtrl = async (req, res) => {
  const data = await getNews();
  res.status(200).json({ status: `Successfully!`, statusCode: 200, data });
};

module.exports = {
  getNewsCtrl,
};
