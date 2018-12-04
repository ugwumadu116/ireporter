import express from 'express';
import adminController from '../controllers/admincontroller';
import midlleWareAuth from '../validator/check-auth';

const router = express.Router();

router.post('/login', adminController.loginAmin);

router.get('/', midlleWareAuth, adminController.findAlladmins);

router.patch('/:adminID', midlleWareAuth, adminController.editadmin);

export default router;
