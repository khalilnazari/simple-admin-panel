const router = require("express").Router()

const { createDepartment, getDepartments } = require("../controllers/departmentController")

// create dept
router.post("/", createDepartment)

router.get("/", getDepartments)

module.exports = router
