const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  const secretKey = process.env.JWT_SECERET; // Replace with your secret key
  const expiresIn = "1d";
  const token = jwt.sign({ id }, secretKey, { expiresIn });

  return token;
};

module.exports = { generateToken };
