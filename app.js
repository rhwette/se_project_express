const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');

const { PORT = 3001 } = process.env;
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/wtwr_db', (e, r) => {
  console.log('connected to DB', r.body);
  console.log('DB error', e);
});

// app.use(bodyParser.json());
app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: '63f797a6cf62ae9785adb0ab',
    // owner: '63f797a6cf62ae9785adb0ab',
  };
  next();
});

app.use(routes);

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
  console.log('this is working so far');
});
