require("dotenv").config();

const config = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || "development",
  version: process.env.APP_VERSION || "1.0.0"
};

module.exports = config;