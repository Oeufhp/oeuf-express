const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")

const auth_service = require("../../services/auth_service")
const { User } = require("../../models/user_model")

router.post("/", async (req, res) => {
	const { error } = auth_service.validateUser(req.body)
	if (error) res.status(400).send(error.details[0].message)
	let user = await User.findOne({ email: req.body.email })
	if (!user) return res.status(400).send("Invalid email or password")

	const isPasswordValid = bcrypt.compare(req.body.password, user.password)
	if (!isPasswordValid) return res.status(400).send("Invalid email or password")
	const token = user.generateAuthToken()
	res.send({ token })
})

module.exports = router
