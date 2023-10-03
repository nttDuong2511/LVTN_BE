const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.header('Authorization');

  if (!token || !token.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token không hợp lệ' });
  }

  const rawToken = token.split(' ')[1];

  jwt.verify(rawToken, process.env.JWT_SECRET, (error, decodedToken) => {
    if (error) {
      return res.status(401).json({ message: 'Token không hợp lệ', error: error.message });
    }
    req.user = decodedToken.user;
    next();
  });
};
