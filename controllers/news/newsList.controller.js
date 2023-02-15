const {
  getNews,
  getNewsByWord,
} = require('../../services/news/newsList.service');

const getNewsCtrl = async (req, res) => {
  const data = await getNews();
  res.status(200).json({ status: `Successfully!`, statusCode: 200, data });
};

const getNewsByWordCtrl = async (req, res) => {
  const word = req.params.word;

  const data = await getNewsByWord(word);
  res.status(200).json({ status: `Successfully!`, statusCode: 200, data });
};

module.exports = {
  getNewsCtrl,
  getNewsByWordCtrl,
};
