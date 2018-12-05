import express from 'express';
import interventionController from '../controllers/interventionsController';
import midlleWareAuth from '../validator/checkAuth';
// import interventAuth from '../validator/interventionAuth';

const router = express.Router();

router.get('/', midlleWareAuth, interventionController.findAllInterventions);

router.post('/', midlleWareAuth, interventionController.createIntervention);

router.get('/:interventionID', midlleWareAuth, interventionController.findOneIntervention);

router.patch('/:interventionID', midlleWareAuth, interventionController.editIntervention);

router.delete('/:interventionID', midlleWareAuth, interventionController.deleteIntervention);

export default router;
