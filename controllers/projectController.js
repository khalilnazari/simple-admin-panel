const Project = require("../model/Project")
const Department = require("../model/Department")
// const Ticket = require("../model/Ticket")

const INTERNAL_ERROR_MESSAGE = "Internal server error. Please contact engineering team."

/****************************** Create project ****************************** */

const createProject = async (req, res) => {
    const { projectName, projectId, department: departmentId } = req.body

    // chekf required fields
    if (!projectName) {
        return res.status(401).json({ message: "Projet Name is required." })
    }
    if (!projectId) {
        return res.status(401).json({ message: "Project ID is required." })
    }

    // check if the a project with same ID is exist
    try {
        const existingProject = await Project.findOne({ projectId })
        if (existingProject) {
            return res
                .status(401)
                .json({ message: "A project with same ProjectId is already exist." })
        }
    } catch (error) {
        res.status(500).json({ message: INTERNAL_ERROR_MESSAGE })
    }

    try {
        // 1: Create new project.
        const newProject = new Project(req.body)
        const savedProject = await newProject.save()
        const { _id } = savedProject._doc
        const newProjectID = _id.toString()

        // 2. Updated Dept
        const updatedDepartment = await Department.updateOne(
            { _id: departmentId },
            {
                $push: { projects: newProjectID }
            }
        )

        // response to client
        if (updatedDepartment) {
            res.status(201).json(savedProject)
        } else {
            res.status(401).json({ message: "The selected department wasn't updated." })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: INTERNAL_ERROR_MESSAGE })
    }
}

/****************************** Fetch all project ****************************** */

const getProjects = async (req, res) => {
    try {
        const projects = await Project.find()
        res.status(201).json(projects)
    } catch (error) {
        res.status(500).json({ message: INTERNAL_ERROR_MESSAGE })
    }
}

/****************************** Fetch one project ****************************** */

const getProject = async (req, res) => {
    const { id } = req.params

    try {
        const project = await Project.findById(id)
        res.status(201).json(project)
    } catch (error) {
        res.status(500).json({ message: INTERNAL_ERROR_MESSAGE })
    }
}

/****************************** Update project ****************************** */

const updateProject = async (req, res) => {
    const { id } = req.params
    try {
        const updatedProject = await Project.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        )
        res.status(201).json(updatedProject)
    } catch (error) {
        res.status(500).json({ message: INTERNAL_ERROR_MESSAGE })
    }
}

/****************************** Delete project ****************************** */

const deleteProject = async (req, res) => {
    const { id } = req.params
    // const { departmentId } = req.body

    // 1. Update related Department
    // 2. Delete all of its tickets
    // 3. update users
    // 4. Delete the project
    try {
        // 1 :
        // const department = await Department.find({ _id: departmentId }, { projects: 1 })
        // if (!department) {
        //     return res.status(401).json({
        //         message: "We couldn't find the related Department to update."
        //     })
        // }
        // let currentProjectsInDept = await department.projects
        // let updatedProjectsInDept = await currentProjectsInDept.filter(
        //     (id) => departmentId !== id && id
        // )
        // const updatedDepartment = await Department.findByIdAndUpdate(departmentId, {
        //     projects: updatedProjectsInDept
        // })
        // if (!updatedDepartment) {
        //     return res.status(401).json({ message: "We couldn't update the deptartment!" })
        // }

        // 2 :
        // const updatedTickets = await Ticket.deleteMany({
        //     project: departmentId
        // })
        // if (updatedTickets) {
        //     return res.status(401).json({ message: "We couldn't update Tickets!" })
        // }

        // 3 :
        // 4 :
        await Project.findByIdAndDelete(id)
        res.status(201).json({
            message:
                "The project has been deleted successfully. Deptartment and Tickets document are also updated."
        })
    } catch (error) {
        res.status(500).json({ message: INTERNAL_ERROR_MESSAGE })
    }
}

// export
module.exports = {
    createProject,
    updateProject,
    deleteProject,
    getProject,
    getProjects
}
