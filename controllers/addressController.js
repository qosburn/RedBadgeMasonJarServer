let router = require('express').Router();
const { Address } = require('../models');
const validateSession = require('../middleware/validate-session');

router.post('/create', validateSession, function (req, res) {
  console.log(req.user.id);
  const addressInfo = {
    newsLetter: req.body.newsLetter,
    street: req.body.street,
    state: req.body.state,
    zipCode: req.body.zipCode,
    city: req.body.city,
    userId: req.user.id,
  };
  Address.create(addressInfo)
    .then((address) => res.status(200).json(address))
    .catch((err) => res.status(500).json({ error: err }));
});

router.get('/get', validateSession, function (req, res) {
  const query = {
    where: { userId: req.user.id },
    include: 'user',
  };
  Address.findOne(query)
    .then((address) => res.status(200).json(address))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
