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
const departmentRoute = require("./routes/deptRoutes")
const projectRoute = require("./routes/projectRoute")
app.use("/api/auth", authRoute)
app.use("/api/user", userRoute)
app.use("/api/department", departmentRoute)
app.use("/api/project", projectRoute)

// middleware

// mongoDB Connection
require("./config/mongooseConfig")

// application port
const PORT = process.env.PORT || 6000
app.listen(PORT, () => console.log(`App is running on port: ${PORT}`))
