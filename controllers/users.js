const User = require('../models/user');

// CREATE (post / create new user)
const createUser = (req, res) => {
  // console.log('RESPONSE', res);
  // console.log('REQUEST', req);
  // console.log(req.body);

  const { name, avatar } = req.body;

  User.create({ name, avatar })
    .then((item) => {
      // console.log(item);
      res.send({ data: item });
    })
    .catch((e) => {
      res.status(500).send({ message: 'createUser', e });
    });
};

// READ (get / find all users)
const getUsers = (req, res) => {
  // console.log('RESPONS', res);
  // console.log('REQUEST', req);

  const { name, avatar } = req.body;

  User.find()
    .then((items) => {
      // console.log(items);
      res.send({ data: items });
    })
    .catch((e) => {
      res.status(500).send({ message: 'Error from getUser', e });
    });
};

// READ (get / findById)
// console.log('RESPONS', res);
// console.log('REQUEST', req);

// const { name, avatar } = req.body;
// console.log(items);

const getUser = (req, res) => {
  const { userId } = req.params;

  User.findById(userId)
    .then((items) => {
      res.send({ data: items });
    })
    .catch((e) => {
      res.status(500).send({ message: 'Error from getUser', e });
    });
};

module.exports = {
  createUser,
  getUsers,
  getUser,
};
