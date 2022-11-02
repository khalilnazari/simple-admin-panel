const router = require("express").Router()

const {
    createDepartment,
    getDepartments,
    updateDepartment
} = require("../controllers/departmentController")

// create dept
router.post("/", createDepartment)

router.get("/", getDepartments)

router.put("/:id", updateDepartment)

module.exports = router
