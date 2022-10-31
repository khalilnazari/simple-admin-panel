const mongoose = require("mongoose")

// User
const DepartmentSchema = new mongoose.Schema(
    {
        deptName: { type: String, required: true },
        deptId: { type: String, required: true },
        deptHead: { type: String },
        tickets: { type: Array }, // ["ticket_id", "ticket_id", "ticket_id"]
        members: { type: Array }, // ["user_id", "user_id", "user_id"]
        projects: { type: Array } // ["project_id", "project_id", "project_id"]
    },
    { timestamps: true }
)
module.exports = mongoose.model("Daprtment", DepartmentSchema)
