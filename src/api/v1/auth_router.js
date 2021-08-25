const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")

const auth_service = require("../../services/auth_service")
const { User } = require("../../models/user_model")

router.post("/", async (req, res) => {
	const { error } = auth_service.validateUser(req.body)
	let user = await User.findOne({ email: req.body.email })
	if (!user) return res.status(400).send("Invalid email or password")

	const isPasswordValid = bcrypt.compare(req.body.password, user.password)
	if (!isPasswordValid) return res.status(400).send("Invalid email or password")

	res.send(true)
})

module.exports = router
