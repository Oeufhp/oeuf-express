const error_handler = (err, req, res, next) => {
	if (typeof err !== "undefined") {
		res.status(400).send({ err })
	} else {
		res.status(500).send(err)
	}
}

module.exports = error_handler
