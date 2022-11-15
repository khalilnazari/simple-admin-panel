const mongoose = require("mongoose")

// User
const UserSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String },
        password: { type: String },
        email: { type: String, required: true, unique: true },
        phoneNumber: { type: String },
        role: { type: String },
        tickets: { type: Array },
        department: {
            deptName: String,
            deptId: String
        }
    },
    { timestamps: true }
)
module.exports = mongoose.model("User", UserSchema)
