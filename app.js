const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const { PORT = 3001 } = process.env;
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/wtwr_db', (e, r) => {
  console.log('connected to DB', r.body);
  console.log('DB error', e);
});

app.use(bodyParser.json());
app.use(routes);
// app.use(express.json());

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
  console.log('this is working so far');
});
