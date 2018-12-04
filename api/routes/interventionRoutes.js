import express from 'express';
import interventionController from '../controllers/interventionsController';
import midlleWareAuth from '../validator/check-auth';
import interventAuth from '../validator/interventionauth';

const router = express.Router();

router.get('/', midlleWareAuth, interventionController.findAllinterventions);

router.post('/', midlleWareAuth, interventionController.createintervention);

router.get('/:interventionID', midlleWareAuth, interventionController.findOneintervention);

router.patch('/:interventionID', midlleWareAuth, interventAuth, interventionController.editintervention);

router.delete('/:interventionID', midlleWareAuth, interventAuth, interventionController.deleteintervention);

export default router;
