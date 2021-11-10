let router = require('express').Router();
const { Cart } = require('../models');
const validateSession = require('../middleware/validate-session');

router.post('/test', function (req, res) {
  res.send('This test the route');
});

router.post('/create', validateSession, function (req, res) {
  console.log(req.user.id);
  const cartMake = {
    projectCartQty: req.body.projectCartQty,
    productCartOptionChar: req.body.productCartOptionChar,
    productCartOptions: req.body.productCartOptions,
    productCartNotes: req.body.productCartNotes,
    userId: req.user.id,
  };
  Cart.create(cartMake)
    .then((cart) => res.status(200).json(cart))
    .catch((err) => res.status(500).json({ error: err }));
});

router.put('/update/:id', validateSession, function (req, res) {
  console.log(req.user.id);
  const cartUpdate = {
    projectCartQty: req.body.projectCartQty,
    productCartOptionChar: req.body.productCartOptionChar,
    productCartOptions: req.body.productCartOptions,
    productCartNotes: req.body.productCartNotes,
    userId: req.user.id,
  };

  const query = { where: { id: req.params.id, userId: req.user.id } };

  Cart.update(cartUpdate, query)
    .then((cart) => res.status(200).json(cart))
    .catch((err) => res.status(500).json({ error: err }));
});

router.get('/get', validateSession, function (req, res) {
  const query = {
    where: { userId: req.user.id },
    // include: [{ all: true }],
    include: 'user',
  };
  //   Product.findAll({ where, include: [{ all: true, nested: true }] }), -- doesn't work
  Cart.findAll(query)
    .then((cart) => res.status(200).json(cart))
    .catch((err) => res.status(500).json({ error: err }));
});

router.delete('/delete/:id', validateSession, function (req, res) {
  const query = { where: { id: req.params.id, userId: req.user.id } };

  Cart.destroy(query)
    .then(() => res.status(200).json({ message: 'Cart entry destroyed ):' }))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
