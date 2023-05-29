const ClothingItem = require('../models/clothingItem');

// CREATE (POST)
const createItem = (req, res) => {
  console.log('RESPONSE', res);
  console.log('REQUEST', req);
  // console.log(req.user._id);
  console.log(req.body);

  const { name, weather, imageURL } = req.body;

  // can use shorthand, but if changing will need to use full key:value pair
  // ClothingItem.create({ name, weather, imageURL })
  ClothingItem.create({
    name,
    weather,
    imageURL,
    owner: req.user._id,
  })
    .then((item) => {
      console.log(item);
      res.send({ data: item });
    })
    .catch((e) => {
      res.status(500).send({ message: 'Error from createItem', e });
    });
};

// READ (GET)
const getItems = (req, res) => {
  ClothingItem.find({})
    .then((items) => res.status(200).send(items))
    .catch((e) => {
      res.status(500).send({ message: 'Error from getItems', e });
    });
};

// UPDATE (PUT)
const updateItem = (req, res) => {
  const { itemId } = req.params;
  const { imageURL } = req.body;

  // first find the item that requires updating
  ClothingItem.findByIdAndUpdate(itemId, { $set: { imageURL } })
    .orFail()
    .then((item) => res.status(200).send({ data: item }))
    .catch((e) => {
      res.status(500).send({ message: 'Error from updateItem', e });
    });
};

// DELETE (delete)
const deleteItem = (req, res) => {
  const { itemId } = req.params;

  console.log(itemId);
  ClothingItem.findByIdAndDelete(itemId)
    .orFail()
    .then((item) => res.status(204).send({}))
    .catch((e) => {
      res.status(500).send({ message: 'Error from deleteItem', e });
    });
};

module.exports = {
  createItem,
  getItems,
  updateItem,
  deleteItem,
};
