//Business logics
//Input validation
const Joi = require("joi")
exports.validateUser = user => {
	const schema = Joi.object({
		name: Joi.string().min(5).max(30).required(),
		email: Joi.string().min(5).max(255).required().email(),
		password: Joi.string().min(5).max(1024).required()
	})

	return schema.validate(user)
}
