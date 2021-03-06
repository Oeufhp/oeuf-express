const Joi = require("joi")
exports.validateUser = req => {
	const schema = Joi.object({
		email: Joi.string().min(5).max(255).required().email(),
		password: Joi.string().min(5).max(1024).required()
	})

	return schema.validate(req)
}
