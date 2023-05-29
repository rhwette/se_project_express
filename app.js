// const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const { PORT = 3001 } = process.env;
const app = express();

const bodyParser = require('body-parser');

const routes = require('./routes');
//order is important
app.use(express.json());
// THis middleware needs to happen before the routes happen
app.use((req, res, next) => {
  req.user = {
    _id: '64659870e1b5c16f84a4688c',
  };
  next();
});
app.use(routes);

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
  console.log('this is working to this point');
});

// set up the server
// const http = require('http');
// const server = http.createServer((request, response) => {
//   console.log(' response is here');
//   console.log(request);
//   console.log(response);
// });
// server.listen(3000);

mongoose.connect(
  'mongodb://127.0.0.1:27017/wtwr_db',
  // 'mongodb://localhost:27017/wtwr_db',

  (error, r) => {
    console.log('connected to DB', r.body);
    console.log('DB error', error);
    console.log('connected to DBxxx1234');
  },
  (error) => console.log('DB error', error)
);

// app.use(bodyParser.json());

//middleware to attach 'user' to every request
// app.use((req, res, next) => {
//   req.user = {
//     _id: '64659870e1b5c16f84a4688c',
//   };
//   next();
// });
