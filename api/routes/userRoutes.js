import express from 'express';
import userController from '../controllers/userController';
// import Users from '../db/models/userModel';

const router = express.Router();

router.post('/signup', userController.signedUpUser);

router.post('/login', userController.loginUser);

export default router;
