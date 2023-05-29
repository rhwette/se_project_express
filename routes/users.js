const router = require('express').Router();

const { createUser } = require('../controllers/users');
const { getUsers } = require('../controllers/users');
const { getUser } = require('../controllers/users');

// 3 controllers below
// Create (new user)
router.post('/users', createUser);

// Read (all users)
router.get('/users', getUsers);

// Read (user by Id)
router.get('/users/:userId', getUser);

module.exports = router;
