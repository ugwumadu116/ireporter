import chai from 'chai';
import chaiHttp from 'chai-http';
import jwt from 'jsonwebtoken';
import server from '../app';

const should = chai.should();

chai.use(chaiHttp);
const prefix = '/api/v1';

const userCredentials = {
  email: 'ugwumadu@gmail.com',
  password: '13du',
  userIId: '13du',
};

const token = jwt.sign({
  email: 'ugwumadu@gmail.com',
  userId: '13du',
}, 'secret', { expiresIn: '1hr' });

describe('API Test', () => {
  describe('Mocha Test', () => {
    it('Says Hello, Mocha!', (done) => {
      const msg = 'Hello, Mocha';
      msg.should.equal('Hello, Mocha');
      done();
    });
  });
});


describe('/POST signup', () => {
  it('signup should be able to sign me up', (done) => {
    chai.request(server)
      .post(`${prefix}/user/signup`)
      .send(userCredentials)
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });
});

describe('/POST Login', () => {
  it('should be able to Login with thesame email', (done) => {
    chai.request(server)
      .post(`${prefix}/user/login`)
      .send(userCredentials)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.have.headers;
        done();
      });
  });
});

describe('/GET All redflags', () => {
  it('should Get all The redflags', (done) => {
    chai.request(server)
      .get(`${prefix}/red-flags`)
      .send(token)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(0);
        done();
      });
  });
});
