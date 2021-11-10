const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Router } = require('express');
const { User } = require('../models');
const validateSession = require('../middleware/validate-session');

const router = Router();

router.post('/create', async function (req, res) {
  try {
    //added
    User.create({
      emailAddress: req.body.emailAddress,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      passwordhash: bcrypt.hashSync(req.body.passwordhash, 13),
    }).then(function createSuccess(user) {
      //added
      let token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET,
        /*'i_am_a_secret',*/ {
          expiresIn: 60 * 60 * 24,
        }

        //close added

        // ---removed but might need to add when associate tables
        // let token = jwt.sign({ id: user.id, username: user.username }, 'test', {
        //   expiresIn: 60 * 60 * 24,}

        //-- close old

        //this is ac change
      );
      res.json({
        user: user,
        message: 'User Successfully Created',
        sessionToken: token,
      });
    });
    //close add
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.post('/login', async function (req, res) {
  try {
    //added code here
    User.findOne({
      where: {
        emailAddress: req.body.emailAddress,
      },
    }).then(function loginSuccess(user) {
      if (user) {
        bcrypt.compare(
          req.body.passwordhash,
          user.passwordhash,
          function (err, matches) {
            if (matches) {
              //added

              let token = jwt.sign(
                { id: user.id },
                process.env.JWT_SECRET,
                /*'i_am_a_secret',*/ {
                  expiresIn: 60 * 60 * 24,
                }
                // close add
                //old --
                // let token = jwt.sign(
                //   { id: user.id, username: user.username },
                //   'test',
                //   {
                //     expiresIn: 60 * 60 * 24,
                //   }
                //--close old
              );
              res.status(200).json({
                user: user,
                message: 'User Successfully Logged in!',
                sessionToken: token,
              });
            } else {
              res.status(502).send({ error: 'Login Failed' });
            }
          }
        );
      } else {
        res.status(500).json({ error: 'User does not exist' });
      }
    });
    //closed code here
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = router;
