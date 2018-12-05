import jwt from 'jsonwebtoken';

const checkAuth = (req, res, next) => {
  const token = req.headers['x-auth-token'];
  if (!token) { res.status(401).send('Access denied.No token provided'); }
  try {
    const deceoded = jwt.verify(token, process.env.SECRET);
    if (deceoded) {
      req.userData = deceoded;
      next();
    }
  } catch (error) {
    res.status(400).json({
      message: 'Unauthorised invalid token',
    });
  }
};

export default checkAuth;
// peace
