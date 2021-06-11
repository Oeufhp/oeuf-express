const express = require('express');
const router = express.Router();
const user_service = require('../../services/user_service');
const error_handler = require('../middlewares/error_handler');

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id, 10);

  user_service.get_user(id).then((user) => {
    if (user === null) {
      res.sendStatus(400);
      return;
    }
    res.send(user);
  }).catch((ex) => {
    error_handler({ex, res});
  })
});

module.exports = router;