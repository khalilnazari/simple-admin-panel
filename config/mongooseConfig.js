const mongoose = require("mongoose")

// mongodb connection
const mongodbUrl = process.env.MONGO_URL
mongoose
    .connect(mongodbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("DB connected Successfully!"))
    .catch((err) => console.log("MongoDB: ", err))
