var express = require('express');
var router = express.Router();
var dotenv = require('dotenv').config();
var mongoose = require('mongoose');
const mongodb = require('mongodb');
let bikesModel = require('./bikes');

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

module.exports = router;
