import interventionModal from '../db/models/interventionModal';

class InterventionController {
  static findAllinterventions(req, res, next) {
    const getAllinterventions = interventionModal.findAll();
    res.status(200).send(getAllinterventions);
  }

  static createintervention(req, res, next) {
    const createdintervention = interventionModal.create(req.body);
    res.status(201).json({
      message: 'intervention created',
      createdintervention,
    });
  }

  static findOneintervention(req, res, next) {
    const intervention = interventionModal.findOne(req.params.interventionID);
    if (!intervention) {
      return res.status(404).send({ message: 'intervention not found' });
    }
    return res.status(200).send(intervention);
  }

  static editintervention(req, res, next) {
    const intervention = interventionModal.findOne(req.params.interventionID);
    if (!intervention) {
      res.status(404).send({ message: 'intervention not found' });
    }
    const updatedintervention = interventionModal.update(req.params.interventionID, req.body);
    res.status(200).send(updatedintervention);
  }

  static deleteintervention(req, res, next) {
    const intervention = interventionModal.findOne(req.params.interventionID);
    if (!intervention) {
      res.status(404).send({ message: 'intervention not found' });
    }
    const deletedintervention = interventionModal.delete(req.params.id);
    res.status(200).send(deletedintervention);
  }
}

export default InterventionController;
