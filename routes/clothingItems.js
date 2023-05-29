const router = require('express').Router();

const { createItem } = require('../controllers/clothingItems');
const { getItems } = require('../controllers/clothingItems');
const { updateItem } = require('../controllers/clothingItems');
const { deleteItem } = require('../controllers/clothingItems');

// CRUD

// Create
router.post('/', createItem);

// Read
router.get('/items', getItems);

// Update
router.put('/items/:itemId', updateItem);

// Delete
router.delete('/items/:itemId', deleteItem);

module.exports = router;
