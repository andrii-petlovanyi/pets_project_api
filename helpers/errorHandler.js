const { CustomError } = require('./errors');

const errorsHandler = (error, req, res, next) => {
  if (error instanceof CustomError) {
    return res.status(error.status).json({ message: error.message });
  }
  res.status(500).json({ message: error.message });
};

module.exports = { errorsHandler };//DIANA
