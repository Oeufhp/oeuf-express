const error_handler = (err, req, res, next) => {
  if (err.errorId !== undefined) {
    console.log(err);
    res.status(400).send(err);
  } else {
    console.error(err);
    res.status(500).send(err.message);
  }
}

module.exports = error_handler;