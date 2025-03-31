const { prototype } = require("jsonwebtoken/lib/JsonWebTokenError");

const config = {
  user: "metagold_user", // Database username
  password: "MTA597Cn*Dat", // Database password
  server: "103.69.196.81", // Server IP address
  database: "metagold4510", // Database name
  options: {
    encrypt: false, // Disable encryption
  },
  port: 1533,
};

module.exports = config;
