var express = require('express');
var router = express.Router();
var dotenv = require('dotenv').config();
var crypto = require('crypto');
var mongoose = require('mongoose');
var mongodb = require('mongodb');
var nodemailer = require('nodemailer');
var userModel = require('./user');
var {
  hashing,
  hashCompare,
  createJWT,
  authenticate,
} = require('../library/auth');

// create user details
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sridharsurya9797@gmail.com',
    pass: process.env.PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// Register
router.post('/register', async (req, res) => {
  try {
    const user = await userModel
      .findOne({ email: req.body.email })
      .then((doc) => {
        return doc;
      });
    if (user) {
      console.log(user);
      res.send({ message: 'User already exists' });
    } else {
      const hash = await hashing(req.body.password);
      const tokenStr = crypto.randomBytes(64).toString('hex');
      const doc = new userModel({
        email: req.body.email,
        fullName: req.body.fullname,
        mobileNumber: req.body.mobile_number,
        password: hash,
        emailToken: tokenStr,
        isVerified: false,
      });
      doc.save();
      // send verification mail to user
      const mailOptions = {
        from: '"Verify your email" <sridharsurya9797@gmail.com>',
        to: doc.email,
        subject: 'verify your email',
        html: `<h2>${
          doc.fullName.split()[0]
        }! Thanks for registering on our site</h2>
                <h4>Please verify your email to continue...</h4>
                <a href="${process.env.URL}/verify-email/${
          doc.emailToken
        }">Verify your email</a>`,
      };
      //sending mail
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Verification email sent');
        }
      });
      res.send({
        message: 'Account created',
      });
    }
  } catch (e) {
    console.log(e);
    res.send({ message: 'Failed to create user' });
  }
});

// verify user email
router.get('/verify-email/:token', async (req, res) => {
  try {
    const user = await userModel.find({ emailToken: req.params.token });
    if (user) {
      userModel
        .findOneAndUpdate(
          {
            emailToken: req.params.token,
          },
          {
            isVerified: true,
            emailToken: null,
          }
        )
        .then((doc) => {
          res.send({ message: 'Verified' });
        })
        .catch((e) => {
          res.send({ message: 'Email not verified' });
        });
    }
  } catch (e) {
    console.log(e);
    res.send({
      message: 'Incorrect token',
    });
  }
});

// login
router.post('/login', async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (user) {
      const compare = await hashCompare(req.body.password, user.password);
      if (compare === true) {
        // create token
        const token = await createJWT({
          fullName: user.fullName,
          email: user.email,
        });
        res.send({
          message: 'Login successful',
        });
      } else {
        res.send({
          message: 'Invalid email or password',
        });
      }
    } else {
      res.send({
        message: 'User not available',
      });
    }
  } catch (e) {
    console.log(e);
    res.send({
      message: 'Error in connection',
    });
  }
});

// forgot password
router.put('/forgot-password', async (req, res) => {
  try {
    const user = await userModel
      .findOne({ email: req.body.email })
      .then((doc) => {
        return doc;
      });
    if (user) {
      const token = await createJWT({
        fullName: user.fullName,
        email: user.email,
      });
      const updatedUser = await userModel
        .findOneAndUpdate(
          {
            email: req.body.email,
          },
          {
            emailToken: token,
          }
        )
        .then((doc) => {
          return doc;
        });

      // sending token
      const mailOptions = {
        from: '"Reset your password" <sridharsurya9797@gmail.com>',
        to: user.email,
        subject: 'Password reset link',
        html: `<h2>${user.fullName}! Please reset your password with the below link</h2>
              <a href="http://${process.env.URL}/reset-password/${updatedUser.emailToken}">Reset Password</a>`,
      };

      //sending mail
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Reset link sent successfully');
        }
      });
      res.send({
        message: 'Reset link sent successfully',
        token: updatedUser.emailToken,
      });
    } else {
      res.send({
        message: 'No user available',
      });
    }
  } catch (e) {
    console.log(e);
    res.send({ message: e });
  }
});

// reset password
router.put('/reset-password/:token', async (req, res) => {
  const token = req.params.token;
  console.log(token);
  const mail = await authenticate(token);
  console.log(mail);
  try {
    if (mail) {
      const hash = await hashing(req.body.password);
      const user = await userModel
        .findOneAndUpdate(
          {
            email: mail,
          },
          {
            password: hash,
          },
          {
            new: true,
          }
        )
        .then((doc) => {
          return doc;
        });

      res.send({ message: 'Password reset successfully' });
    } else {
      res.send({
        message: 'Link expired',
      });
    }
  } catch (e) {
    res.send({ message: e });
  }
});

module.exports = router;
