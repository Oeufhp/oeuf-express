const jwt = require("jsonwebtoken")
const config = require("config")

module.exports = (req, res, next) => {
	try {
		const token = req.headers.x_auth_token
		const decodedToken = jwt.verify(token, config.get("jwtPrivateKey"))
		if (typeof decodedToken !== "undefined") {
			next()
		} else {
			throw new Error("Invalid token")
		}
	} catch (err) {
		res.status(401).send({ error: new Error("Invalid request") })
	}
}
