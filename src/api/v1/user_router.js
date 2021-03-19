const express = require('express');
const router = express.Router();
const user_service = require('../../services/user_service');

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id, 10);

  user_service.get_user(id).then((user) => {
    res.send(user);
  }).catch((ex) => {
    console.log(ex);
    if (ex.errorId !== undefined) {
      res.status(400).send(ex);
    } else {
      res.status(500).send(ex.message);
    }
  })
});

module.exports = router;