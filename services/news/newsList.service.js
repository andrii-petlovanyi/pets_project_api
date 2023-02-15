const News = require('../../models/news.model');

const getNews = async () => {
  const data = await News.find();

  if (!data) {
    throw new CustomError('Sorry, no news in database');
  }

  return data;
};

module.exports = { getNews };
