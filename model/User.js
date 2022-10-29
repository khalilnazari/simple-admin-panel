const mongoose = require("mongoose")

// User
const UserSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        password: { type: String },
        email: { type: String, required: true, unique: true },
        phoneNumber: { type: String, unique: true },
        role: { type: String },
        tickets: { type: Array } // ["task_1_id", "task_2_id", "task_3_id"]
    },
    { timestamps: true }
)
module.exports = mongoose.model("User", UserSchema)
