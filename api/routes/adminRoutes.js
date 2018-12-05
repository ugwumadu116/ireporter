import express from 'express';
import adminController from '../controllers/adminController';
import midlleWareAuth from '../validator/checkAuth';

const router = express.Router();

router.post('/login', adminController.loginAmin);

router.get('/', midlleWareAuth, adminController.findAllAdmins);

router.patch('/:adminID', midlleWareAuth, adminController.editAdmin);

export default router;

// peace