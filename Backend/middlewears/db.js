const { connectDB, closeDB } = require("../db");

const dbMiddleware = async (req, res, next) => {
  await connectDB();
  res.on('finish', closeDB); 
  next();
};

module.exports = dbMiddleware;