let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
  email: String,
  fullName: String,
  mobileNumber: Number,
  password: String,
  emailToken: { type: String, default: null },
  isVerified: { type: String, default: false },
});

module.exports = mongoose.model('User', userSchema);
