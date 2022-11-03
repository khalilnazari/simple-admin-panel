const mongoose = require("mongoose")

// User
const ProjectSchema = new mongoose.Schema(
    {
        projectName: { type: String, required: true },
        projectId: { type: String, required: true, unique: true },
        clientName: { type: String },
        clientEmail: { type: String },
        department: { type: String },
        projectManager: { type: String },
        tickets: { type: Array }
    },
    { timestamps: true }
)

module.exports = mongoose.model("Project", ProjectSchema)
