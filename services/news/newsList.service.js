const News = require('../../models/news.model');
const CustomError = require('../../helpers/errors');

const getNews = async word => {
  if (word) {
    const data = await News.find({
      title: {
        $regex: `${word}`,
        $options: '/i',
      },
    });
    return data;
  }

  const data = await News.find();

  if (!data) {
    throw new CustomError('Sorry, no news in database');
  }

  return data;
};

module.exports = {
  getNews,
};
