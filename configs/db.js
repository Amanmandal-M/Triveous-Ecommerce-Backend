const mongoose = require('mongoose');
const colors = require('colors');
require('dotenv').config();

const DB_URI = process.env.MONGO_URI;

module.exports.connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(colors.green('Connected to database'));
  } catch (error) {
    console.error(colors.red('Database connection error:', error));
  }
};
