// Main v1 router
const express = require("express")
const router = express.Router()
const auth_router = require("./auth_router")
const user_router = require("./user_router")

router.use("/users", user_router)
router.use("/auth", auth_router)

module.exports = router
