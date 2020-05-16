// api route manage all api request
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
//declare connection string to db
const db =
  'mongodb+srv://userZC:123456czc@cluster0-oe5zt.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(db, (err) => {
  if (err) {
    console.error('Error' + err);
  } else {
    console.log('Connected to mongodb');
  }
});

function verifyToken(req, res, next) {
  console.log('from verifyToken');
  if (!req.headers.authorization) {
    console.log(
      'Unauthorizaed: header unauthorized',
      req.headers.authorization
    );
    return res.status(401).send('Unauthorized request');
  }

  const token = req.headers.authorization.split(' ')[1];
  if (token === 'null') {
    console.log('Unauthorizaed: token===null', token);
    return res.status(401).send('Unauthorized request');
  }
  // the verify method returns decoded token only if its valid
  const payload = jwt.verify(token, 'secretkey');

  if (!payload) {
    console.log('Unauthorizaed: header unauthorized: payload', payload);
    return res.status(401).send('Unauthorized request');
  }

  console.log('token verification successed');
  // verify passed: assign the payload subject as the request user id
  // then pass on the execution to the next handler
  req.userId = payload.subject;
  next();
}

router.get('/', (req, res, next) => {
  res.send('From api route');
  next();
});

router.post('/register', (req, res) => {
  // extract user info from request body
  let userData = req.body;
  // cast the userData to mongo schema format
  let user = new User(userData);
  // save it to the database
  // as a callback, this method given either error or registered user
  user.save((error, registeredUser) => {
    if (error) {
      console.log(error);
    } else {
      // after the new user saved.
      // generate payload
      let payload = { subject: registeredUser._id };
      // generate the token with the payload
      let token = jwt.sign(payload, 'secretkey');
      // send the token as an object
      res.status(200).send({ token });
    }
  });
});

router.post('/login', (req, res) => {
  // extract user info from request body
  let userData = req.body;

  // check if email is exist or not with findOne method
  User.findOne({ email: userData.email }, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      // if no user found
      if (!user) {
        res.status(401).send('Invalid email');
        // console.log('no user found, invalid email');
      } else {
        // user found, --> check password
        if (user.password !== userData.password) {
          console.log(user.password);
          console.log(userData.password);

          // send data with message
          res.status(401).send('Invalid password');
        } else {
          let payload = { subject: user._id };
          let token = jwt.sign(payload, 'secretkey');
          res.status(200).send({ token });
        }
      }
    }
  });
});
// hard code and simulate the mongodb interaction and fetched event
router.get('/events', (req, res) => {
  let events = [
    {
      _id: '1',
      name: 'Auto Expo',
      description: 'lorem ipsum',
      date: '2012-04-23T18:25:43.511Z',
    },
    {
      _id: '2',
      name: 'Auto Expo',
      description: 'lorem ipsum',
      date: '2012-04-23T18:25:43.511Z',
    },
    {
      _id: '3',
      name: 'Auto Expo',
      description: 'lorem ipsum',
      date: '2012-04-23T18:25:43.511Z',
    },
    {
      _id: '4',
      name: 'Auto Expo',
      description: 'lorem ipsum',
      date: '2012-04-23T18:25:43.511Z',
    },
    {
      _id: '5',
      name: 'Auto Expo',
      description: 'lorem ipsum',
      date: '2012-04-23T18:25:43.511Z',
    },
    {
      _id: '6',
      name: 'Auto Expo',
      description: 'lorem ipsum',
      date: '2012-04-23T18:25:43.511Z',
    },
  ];
  res.json(events);
});

// verifyToken here is: first the token is verified, then the events code get executed
router.get('/special', verifyToken, (req, res) => {
  let specialEvents = [
    {
      _id: '1',
      name: 'Auto Expo Special',
      description: 'lorem ipsum',
      date: '2012-04-23T18:25:43.511Z',
    },
    {
      _id: '2',
      name: 'Auto Expo Special',
      description: 'lorem ipsum',
      date: '2012-04-23T18:25:43.511Z',
    },
    {
      _id: '3',
      name: 'Auto Expo Special',
      description: 'lorem ipsum',
      date: '2012-04-23T18:25:43.511Z',
    },
    {
      _id: '4',
      name: 'Auto Expo Special',
      description: 'lorem ipsum',
      date: '2012-04-23T18:25:43.511Z',
    },
    {
      _id: '5',
      name: 'Auto Expo Special',
      description: 'lorem ipsum',
      date: '2012-04-23T18:25:43.511Z',
    },
    {
      _id: '6',
      name: 'Auto Expo Special',
      description: 'lorem ipsum',
      date: '2012-04-23T18:25:43.511Z',
    },
  ];
  res.json(specialEvents);
});

module.exports = router;
