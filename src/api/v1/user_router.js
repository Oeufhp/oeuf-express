const express = require('express');
const router = express.Router();
const user_service = require('../../services/user_service');

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id, 10);

  user_service.get_user(id).then((user) => {
    if (user === null) {
      res.sendStatus(404);
      return;
    }
    res.send(user);
  }).catch((ex) => {
    next(ex);
  })
});

module.exports = router;