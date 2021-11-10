let router = require('express').Router();
const { Product } = require('../models');
const validateSession = require('../middleware/validate-session');

router.post('/test', function (req, res) {
  res.send('This test the route');
});

router.post('/create', validateSession, function (req, res) {
  console.log(req.user.id);
  const productMake = {
    productType: req.body.productType,
    projectName: req.body.projectName,
    projectDescription: req.body.projectDescription,
    projectPhoto: req.body.projectPhoto,
    projectOptionChar: req.body.projectOptionChar,
    productQuantity: req.body.productQuantity,
    productPrice: req.body.productPrice,
    inCart: req.body.inCart,
    userId: req.user.id,
  };
  Product.create(productMake)
    .then((product) => res.status(200).json(product))
    .catch((err) => res.status(500).json({ error: err }));
});

router.put('/update/:id', validateSession, function (req, res) {
  console.log(req.user.id);
  const productUpdate = {
    productType: req.body.productType,
    projectName: req.body.projectName,
    projectDescription: req.body.projectDescription,
    projectPhoto: req.body.projectPhoto,
    projectOptionChar: req.body.projectOptionChar,
    productQuantity: req.body.productQuantity,
    productPrice: req.body.productPrice,
    inCart: req.body.inCart,
    userId: req.user.id,
  };

  const query = { where: { id: req.params.id, userId: req.user.id } };

  Product.update(productUpdate, query)
    .then((product) => res.status(200).json(product))
    .catch((err) => res.status(500).json({ error: err }));
});

router.get('/get', validateSession, function (req, res) {
  const query = {
    where: { userId: req.user.id },
    // include: [{ all: true }],
    include: 'user',
  };
  //   Product.findAll({ where, include: [{ all: true, nested: true }] }), -- doesn't work
  Product.findAll(query)
    .then((product) => res.status(200).json(product))
    .catch((err) => res.status(500).json({ error: err }));
});

router.delete('/delete/:id', validateSession, function (req, res) {
  const query = { where: { id: req.params.id, userId: req.user.id } };

  Product.destroy(query)
    .then(() => res.status(200).json({ message: 'Product entry destroyed ):' }))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
