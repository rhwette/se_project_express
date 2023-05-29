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
      validator(value) {
        return validator.isURL(value);
      },
      message: 'You must enter a valid URL',
    },
  },
});

module.exports = mongoose.model('name', name);
