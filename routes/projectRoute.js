const router = require("express").Router()

const {
    createProject,
    getProject,
    getProjects,
    updateProject,
    deleteProject
} = require("../controllers/projectController")

// create project
router.post("/", createProject)

// get all projects
router.get("/", getProjects)

// get one project
router.get("/find/:id", getProject)

// updated project
router.put("/:id", updateProject)

// delete project
router.delete("/:id", deleteProject)

module.exports = router
