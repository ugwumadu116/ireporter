import redflagModal from '../db/models/redflagModal';

const statusAuth = (req, res, next) => {
  try {
    const redflag = redflagModal.findOne(req.params.redflagID);
    if (redflag.status === 'Draft') {
      next();
    } else {
      res.status(400).json({
        message: 'Report is under investigation',
      });
    }
  } catch (error) {
    res.status(400).json({
      message: 'Unauthorised invalid token',
    });
  }
};

export default statusAuth;
// peace
