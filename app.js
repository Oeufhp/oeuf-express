const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const logger = require("morgan")
const indexRouter = require("./src/api/index")
const config = require("config")
require("./config/db")
require("dotenv").config()
const error_handler = require("./src/api/middlewares/error_handler")
const app = express()

if (!config.get("jwtPrivateKey")) {
	console.error("Missing JWT private key")
	process.exit(1)
}

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/", indexRouter)

app.use(error_handler)

module.exports = app
