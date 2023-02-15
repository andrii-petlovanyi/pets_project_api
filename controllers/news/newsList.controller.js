const News = require('../../models/news.model');

const getNews = async (req, res) => {
  const data = await News.find();

  if (!data) {
    res.status(404).json({ status: `Not found`, statusCode: 404 });
  }

  res.status(200).json({ status: `Successfully!`, statusCode: 200, data });
};

module.exports = {
  getNews,
};
