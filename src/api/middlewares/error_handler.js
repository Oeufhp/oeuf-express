const error_handler = ({ex, res}) => {
  if (ex.errorId !== undefined) {
    console.log(ex);
    res.status(400).send(ex);
  } else {
    console.error(ex);
    res.status(500).send(ex.message);
  }
}


module.exports = error_handler;