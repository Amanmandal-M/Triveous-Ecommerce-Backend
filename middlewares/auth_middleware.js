const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY;

// Middleware to verify JWT tokens
exports.authenticateToken = (req, res, next) => {
  try {
    const token = req.headers('Authorization');
    if (!token) {
      throw new Error('Unauthorized: Token not provided'.red);
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        if (err.name === 'TokenExpiredError') {
          throw new Error('Unauthorized: Token has expired'.red);
        }
        throw new Error('Unauthorized: Invalid token'.red);
      }

      // Add the decoded user ID to the request object
      req.userId = decoded.userId;
      next();
    });
  } catch (error) {
    console.error(colors.red('Error in middleware: ', error.message))
    res.status(401).json({ error: error.message });
  }
};
