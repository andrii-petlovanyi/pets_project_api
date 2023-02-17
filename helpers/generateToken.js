const jsonWebToken_ = require("jsonwebtoken");
require("dotenv").config();

const {  JWT_SECRET_KEY } = process.env;

const generateTokens = async (id) => {
  const payload = {
    id,
  };

  const accessToken = jsonWebToken_.sign(payload, JWT_SECRET_KEY, {
    expiresIn: "30m",
  });


  return { accessToken };
};

module.exports = { generateTokens };  