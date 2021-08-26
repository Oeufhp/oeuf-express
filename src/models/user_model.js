const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const config = require("config")

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 30
	},
	email: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 255,
		unique: true
	},
	password: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 1024
	},
	isAdmin: Boolean
})

UserSchema.methods.generateAuthToken = () => {
	const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, config.get("jwtPrivateKey"))
	return token
}

const User = mongoose.model("User", UserSchema)

exports.User = User
