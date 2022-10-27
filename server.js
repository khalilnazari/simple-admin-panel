const express = require("express")
const app = express(); 
require("dotenv").config(); 


// database connection


// routes


// middleware


// application port 
const PORT = process.env.PORT || 6000
app.listen(PORT, () => console.log(`App is running on port: ${PORT}`))