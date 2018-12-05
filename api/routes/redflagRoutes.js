import express from 'express';
import RedflagController from '../controllers/redflagController';
import midlleWareAuth from '../validator/checkAuth';
// import redflagAuth from '../validator/redflagAuth';

const router = express.Router();


router.get('/', RedflagController.findAllRedflags);

router.post('/', midlleWareAuth, RedflagController.createRedflag);

router.get('/:redflagID', midlleWareAuth, RedflagController.findOneRedflag);

router.patch('/:redflagID', midlleWareAuth, RedflagController.editRedflag);

router.delete('/:redflagID', midlleWareAuth, RedflagController.deleteRedflag);

export default router;
