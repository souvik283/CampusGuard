const express = require("express")

const authRoute = require("./routes/auth.route")

const cookieParser = require("cookie-parser")

const app = express()
app.use(express.urlencoded({ extended: false }))

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoute)

module.exports = app