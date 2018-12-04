import uuid from 'uuid';

class Redflag {
  // @param {object} data
  constructor() {
    this.redflags = [];
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
    const newredflag = {
      id: uuid.v4(),
      createdOn: today,
      createdBy: data.createdBy || '',
      type: 'Red-Flag',
      location: data.location || '',
      comment: data.comment || '',
      status: 'Draft',
    };
    this.redflags.push(newredflag);
    return newredflag;
  }

  // @param {uuid} id
  // @returns {object} redflag object
  findOne(id) {
    return this.redflags.find(reflect => reflect.id === id);
  }

  // @returns {object} returns all redflags
  findAll() {
    return this.redflags;
  }

  // @param {uuid} id
  // @param {object} data
  update(id, data) {
    const redflag = this.findOne(id);
    const index = this.redflags.indexOf(redflag);
    this.redflags[index].createdBy = data['createdBy'] || redflag.createdBy;
    this.redflags[index].location = data['location'] || redflag.location;
    this.redflags[index].comment = data['comment'] || redflag.comment;
    return this.redflags[index];
  }

  updateStatus(id, data) {
    const redflag = this.findOne(id);
    const index = this.redflags.indexOf(redflag);
    this.redflags[index].status = data['status'] || redflag.status;
    return this.redflags[index];
  }

  // @param {uuid} id
  delete(id) {
    const redflag = this.findOne(id);
    const index = this.redflags.indexOf(redflag);
    this.redflags.splice(index, 1);
    return {};
  }
}
export default new Redflag();
