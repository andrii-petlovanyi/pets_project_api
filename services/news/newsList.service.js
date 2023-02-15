const News = require('../../models/news.model');
const CustomError = require('../../helpers/errors');

const getNews = async () => {
  const data = await News.find();

  if (!data) {
    throw new CustomError('Sorry, no news in database');
  }

  return data;
};

const getNewsByWord = async word => {
  const data = await News.find({
    title: {
      $regex: `${word}`,
    },
  });

  if (!data) {
    throw new CustomError('Sorry, no news in database');
  }

  return data;
};

module.exports = { getNews, getNewsByWord };
