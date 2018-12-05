import jwt from 'jsonwebtoken';
import interventionModal from '../db/models/interventionModal';
import redflagModal from '../db/models/redflagModal';

class adminController {
  static findAllAdmins(req, res, next) {
    const getAllinterventions = interventionModal.findAll();
    const getAllRedflags = redflagModal.findAll();
    res.status(200).json({
      message: 'All reports fetched',
      getAllinterventions,
      getAllRedflags,
    });
  }

  static loginAmin(req, res, next) {
    const adminEmail = req.body.email;
    const adminPassword = req.body.password;
    if (adminEmail === 'admin.com' && adminPassword === 'admin.com') {
      const token = jwt.sign({
        email: 'admin.com',
        password: 'admin.com',
      }, process.env.SECRET, { expiresIn: '1hr' });
      res.header('x-auth-token', token).status(200).json({
        mesage: 'Auth successful',
      });
    } else {
      res.status(401).json({
        error: 'Auth failed missed all.. Not admin',
      });
    }
  }

  static editAdmin(req, res, next) {
    const intervention = interventionModal.findOne(req.params.adminID);
    const redflag = redflagModal.findOne(req.params.adminID);
    if (intervention) {
      const updatedintervention = interventionModal.updateStatus(req.params.adminID, req.body);
      res.status(200).send(updatedintervention);
    }
    if (redflag) {
      const updatedredflag = redflagModal.updateStatus(req.params.adminID, req.body);
      res.status(200).send(updatedredflag);
    } else {
      res.status(401).send('Id not found');
    }
  }
}

export default adminController;
// this me
