const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const auth = require("../middlewares/auth")
const user_service = require("../../services/user_service")
const error_handler = require("../middlewares/error_handler")
const { User } = require("../../models/user_model")

router.get("/", async (req, res) => {
	const users = await User.find().sort("email")
	res.send(users)
})

router.post("/me", auth, async (req, res) => {
	const user = await User.findById(req.body.user._id).select("-password")
	res.send(user)
})

router.post("/", async (req, res) => {
	const { error } = user_service.validateUser(req.body)
	if (error) {
		error_handler(error, req, res)
	}

	let user = await User.findOne({ email: req.body.email })
	if (user) res.status(400).send({ error: "User already exists" })

	user = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	})
	try {
		const salt = await bcrypt.genSalt(10)
		user.password = await bcrypt.hash(user.password, salt)
		user = await user.save()
	} catch (err) {
		return error_handler(error, req, res)
	}
	const token = user.generateAuthToken()
	res.header("x_auth_token", token)
	res.send(user)
})

module.exports = router
