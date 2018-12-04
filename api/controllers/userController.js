import jwt from 'jsonwebtoken'; // for creating web token
import bcrypt from 'bcrypt'; // for hashing password
import Users from '../db/models/userModel';

class UserController {
  static signedUpUser(req, res, next) {
    const emailExit = Users.findEmail(req.body.email);
    if (emailExit) {
      res.status(409).json({
        error: 'user already exist',
      });
    } else {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          res.status(500).json({
            error: err,
          });
        } else {
          const signedUpUser = Users.signup(req.body, hash);
          res.status(201).json({
            message: 'user signed up',
            signedUpUser,
          });
        }
      });
    }
  }

  static loginUser(req, res, next) {
    const emailExit = Users.findEmail(req.body.email);
    if (emailExit) {
      bcrypt.compare(req.body.password, emailExit.password, (err, result) => {
        if (err) {
          res.status(401).json({
            error: 'Auth failed password',
          });
        }
        if (result) {
          const token = jwt.sign({
            email: req.body.email,
            userId: req.body.password,
          }, 'secrete', { expiresIn: '1hr' });
          res.header('x-auth-token', token).status(200).json({
            mesage: 'Auth successful',
          });
        } else {
          res.status(401).json({
            error: 'Auth failed missed all',
          });
        }
      });
    } else {
      res.status(401).json({
        error: 'Auth failed email dont exit',
      });
    }
  }
}

export default UserController;
