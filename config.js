// config.js
require('dotenv').config();

module.exports = {
    JWT_SECRET: process.env.JWT_SECRET || "tusharsecret", 
    // Other configurations...
};
