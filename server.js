const express = require("express")
const app = express()
require("dotenv").config()
const cors = require("cors")

// accept
app.use(express.json())

// database connection

// use corse
app.use(cors())

// routes
const authRoute = require("./routes/authRoute")
const userRoute = require("./routes/userRoute")
app.use("/api/auth", authRoute)
app.use("/api/user", userRoute)

// middleware

// mongoDB Connection
require("./config/mongooseConfig")

// application port
const PORT = process.env.PORT || 6000
app.listen(PORT, () => console.log(`App is running on port: ${PORT}`))
