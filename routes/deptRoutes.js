const router = require("express").Router()

const {
    createDepartment,
    getDepartments,
    updateDepartment,
    deleteDepartment
} = require("../controllers/departmentController")

// create dept
router.post("/", createDepartment)

router.get("/", getDepartments)

router.put("/:id", updateDepartment)
router.delete("/:id", deleteDepartment)

module.exports = router
