import express from 'express';
import RedflagController from '../controllers/redflagController';
import midlleWareAuth from '../validator/check-auth';
import redflagAuth from '../validator/redflagauth';

const router = express.Router();


router.get('/', RedflagController.findAllRedflags);

router.post('/', midlleWareAuth, RedflagController.createRedflag);

router.get('/:redflagID', midlleWareAuth, RedflagController.findOneRedflag);

router.patch('/:redflagID', midlleWareAuth, redflagAuth, RedflagController.editredflag);

router.delete('/:redflagID', midlleWareAuth, redflagAuth, RedflagController.deleteredflag);

export default router;
