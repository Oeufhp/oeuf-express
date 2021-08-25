const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const logger = require("morgan")
const mongoose = require("mongoose")
const indexRouter = require("./src/api/index")
const app = express()
const port = process.env.PORT || 4000

mongoose
	.connect("mongodb://admin:password@localhost/database?authSource=admin", { useUnifiedTopology: true, useNewUrlParser: true })
	.then(() => console.log("Connected to MongoDB..."))
	.catch(err => console.log("Error connecting to MongoDB...", err))

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/", indexRouter)
app.listen(port, () => console.log(`Server running on port ${port}`))

module.exports = app
