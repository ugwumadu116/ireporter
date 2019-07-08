import redflagModal from '../db/models/redflagModal';

class RedflagController {
  static findAllRedflags(req, res, next) {
    const getAllRedflags = redflagModal.findAll();
    res.status(200).send(getAllRedflags);
  }

  static createRedflag(req, res, next) {
    if (!req.body.createdBy && !req.body.location && !req.body.comment) {
      res.status(400).send({ message: 'All fields are required' });
    }
    const createdRedflag = redflagModal.create(req.body);
    res.status(201).json({
      message: 'redflag created',
      createdRedflag,
    });
  }

  static findOneRedflag(req, res, next) {
    const redflag = redflagModal.findOne(req.params.redflagID);
    if (!redflag) {
      return res.status(404).send({ message: 'redflag not found' });
    }
    return res.status(200).send(redflag);
  }

  static editRedflag(req, res, next) {
    const redflag = redflagModal.findOne(req.params.redflagID);
    if (!redflag) {
      res.status(404).send({ message: 'redflag not found' });
    }
    const updatedredflag = redflagModal.update(req.params.redflagID, req.body);
    res.status(200).send(updatedredflag);
  }

  static deleteRedflag(req, res, next) {
    const redflag = redflagModal.findOne(req.params.redflagID);
    if (!redflag) {
      res.status(404).send({ message: 'redflag not found' });
    }
    const deletedredflag = redflagModal.delete(req.params.id);
    res.status(200).send(deletedredflag);
  }
}

export default RedflagController;
