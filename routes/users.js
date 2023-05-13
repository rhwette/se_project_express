const router = require('express').Router();

const { createUser } = require('../controllers/user');
const { getUsers } = require('../controllers/user');
const { getUser } = require('../controllers/user');

// Create (new user)
router.post('/', createUser);

// Read (all users)
router.get('/', getUsers);

// Read (user by Id)
router.get('/:userId', getUser);

module.exports = router;
