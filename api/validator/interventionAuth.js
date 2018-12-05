import interventionModal from '../db/models/interventionModal';

const statusAuth = (req, res, next) => {
  try {
    const intervention = interventionModal.findOne(req.params.interventionID);
    if (intervention.status === 'Draft') {
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
