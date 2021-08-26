module.exports = (req, res, next) => {
	if (!req.isAdmin) {
		res.status(403)
	} else {
		next()
	}
}
