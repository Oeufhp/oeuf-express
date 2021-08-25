const mongoose = require("mongoose")

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
	}
})

const User = mongoose.model("User", UserSchema)

exports.User = User
