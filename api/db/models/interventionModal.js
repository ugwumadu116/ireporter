import uuid from 'uuid';


class Redflag {
  // @param {object} data
  constructor() {
    this.intervention = [];
  }

  // @returns {object} redflag object
  create(data) {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    if (dd < 10) {
      dd = 0 + dd;
    }
    if (mm < 10) {
      mm = 0 + mm;
    }
    today = `${dd} / ${mm} / ${yyyy}`;
    const newintervention = {
      id: uuid.v4(),
      createdOn: today,
      createdBy: data.createdBy || '',
      type: 'Intervention',
      location: data.location || '',
      comment: data.comment || '',
      status: 'Draft',
    };
    this.intervention.push(newintervention);
    return newintervention;
  }

  // @param {uuid} id
  // @returns {object} redflag object
  findOne(id) {
    return this.intervention.find(reflect => reflect.id === id);
  }

  // @returns {object} returns all intervention
  findAll() {
    return this.intervention;
  }

  // @param {uuid} id
  // @param {object} data
  update(id, data) {
    const redflag = this.findOne(id);
    const index = this.intervention.indexOf(redflag);
    this.intervention[index].createdBy = data['createdBy'] || redflag.createdBy;
    this.intervention[index].location = data['location'] || redflag.location;
    this.intervention[index].comment = data['comment'] || redflag.comment;
    return this.intervention[index];
  }

  updateStatus(id, data) {
    const redflag = this.findOne(id);
    const index = this.intervention.indexOf(redflag);
    this.intervention[index].status = data['status'] || redflag.status;
    return this.intervention[index];
  }

  // @param {uuid} id
  delete(id) {
    const redflag = this.findOne(id);
    const index = this.intervention.indexOf(redflag);
    this.intervention.splice(index, 1);
    return {};
  }
}
export default new Redflag();
