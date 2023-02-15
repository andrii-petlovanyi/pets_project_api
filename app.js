const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();
const partnersRouter = require('./routes/partners.route');

const errorsHandler = require('./helpers/errorHandler');

const NewsRouter = require('./routes/news.route');
const noticesRouter = require('./routes/notices.route');

const app = express();
const typeLogger = app.get('env') === 'development' ? 'dev' : 'short';
const PORT = process.env.PORT || 5005;
const { MONGO_URL } = process.env;

app.use(logger(typeLogger));
app.use(cors());
app.use(express.json());


app.use('/api/partners', partnersRouter);
//example for use routes
app.use('/api/news', NewsRouter);
app.use('/api/notices', noticesRouter);

app.use((_, res) => {
  res.status(404).json({ message: 'Sorry, but this resource not found' });
});

app.use(errorsHandler);

const start = async () => {
  try {
    mongoose.set('strictQuery', false);
    await new Promise(resolve => {
      resolve(mongoose.connect(MONGO_URL));
    });

    console.log('Database connection successful');

    app.listen(PORT, error => {
      if (error) console.error('\x1B[31mError at server launch: ', error);
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  } catch (error) {
    console.log('\x1B[31mDatabase connection failed');
    process.exit(1);
  }
};

start();
