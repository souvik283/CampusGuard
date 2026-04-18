const express = require("express")
const cors = require("cors")

const authRoute = require("./routes/auth.route")
const cookieParser = require("cookie-parser")

const app = express()

const corsOption = {
    origin: ["http://localhost:5173"],
}

app.use(cors(corsOption))

app.use(express.urlencoded({ extended: false }))

app.use(express.json())
app.use(cookieParser())


app.use("/api/auth", authRoute)
app.use("/api/test", (req, res)=>{
    res.json({
        "names": ["Aaa", "Bbb", "Ccc", "Ddd"]
    })
})


module.exports = app