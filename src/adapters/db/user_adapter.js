//Adapters connect to the data sources both internal and external
const { User } = require("../../models/user_model")

exports.list_users = async () => {
	const users = await User.find().sort("email")
	return users
}

exports.get_user = async userEmail => {
	const user = User.findOne({ email: userEmail })
	return user
}
