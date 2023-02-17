const mongoose = require('mongoose');
const validator = require('validator');

const name = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator: (v) => validator.isURL(v),
      message: "Link is not valid',",
    },
  },
});

module.exports = mongoose.model('names', name);
