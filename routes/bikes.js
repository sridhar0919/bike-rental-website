let mongoose = require('mongoose');

let bikesSchema = new mongoose.Schema({
  brand: String,
  bikes: Array,
});

module.exports = mongoose.model('Bikes', bikesSchema);
