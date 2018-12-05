import uuid from 'uuid';

class User {
  constructor() {
    this.users = [];
  }

  signup(data, passHash) {
    const newuser = {
      id: uuid.v4(),
      firstname: data.firstname || '',
      lastname: data.lastname || '',
      othername: data.othername || '',
      username: data.username || '',
      phonenumber: data.phonenumber || '',
      email: data.email || '',
      password: passHash,
    };
    this.users.push(newuser);
    return newuser;
  }


  findOne(id) {
    return this.users.find(reflect => reflect.id === id);
  }

  findEmail(email) {
    return this.users.find(reflect => reflect.email === email);
  }


  findAll() {
    return this.users;
  }


  delete(id) {
    const user = this.findOne(id);
    const index = this.users.indexOf(user);
    this.users.splice(index, 1);
    return {};
  }
}
export default new User();
