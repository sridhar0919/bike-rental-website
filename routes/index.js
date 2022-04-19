var express = require('express');
var router = express.Router();
var dotenv = require('dotenv').config();
var mongoose = require('mongoose');
const mongodb = require('mongodb');
let bikesModel = require('./bikes');
const Razorpay = require('razorpay');
var instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

mongoose.connect(process.env.MONGOURL);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// Post vehicles
router.post('/add-bikes', async (req, res) => {
  let bike = new bikesModel(req.body);
  bike
    .save()
    .then((doc) => {
      res.send(doc);
    })
    .catch((err) => {
      res.send(err);
    });
});

// Get bikes by brand
router.get('/get-bike/:brand', async (req, res) => {
  bikesModel
    .find({
      brand: req.params.brand,
    })
    .then((doc) => {
      res.send(doc[0].bikes);
    })
    .catch((err) => {
      res.send(err);
    });
});

// Get current bike
router.get('/get-currentbike/:brand', async (req, res) => {
  bikesModel
    .find({
      brand: req.params.brand,
    })
    .then((doc) => {
      res.send(doc[0].bikes.find((bike) => bike.title == req.query.vehicle));
    })
    .catch((err) => {
      res.send(err);
    });
});

// Get homepage bikes
router.get('/get-homebikes', async (req, res) => {
  let homeBikes = [];
  bikesModel
    .find()
    .then((doc) => {
      doc.map((brand) => {
        homeBikes.push(brand.bikes[0]);
      });
      res.send(homeBikes);
    })
    .catch((err) => {
      res.send(err);
    });
});

// create payment order
router.post('/create/orderId', async (req, res) => {
  console.log('create orderId request', req.body);
  var options = {
    amount: req.body.amount,
    currency: 'INR',
    receipt: 'rcp1',
  };
  instance.orders.create(options, function (err, order) {
    console.log(order);
    res.send({ orderId: order.id });
  });
});

module.exports = router;
