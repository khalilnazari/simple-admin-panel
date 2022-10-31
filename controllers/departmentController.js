const Department = require("../model/Department")

// create dept.
const createDepartment = async (req, res) => {
    const { deptName, deptId } = req.body

    // check required fields
    if (!deptName) {
        return res.status(400).json({ message: "Dept name is rquired fields." })
    }

    if (!deptId) {
        return res.status(400).json({ message: "Dept ID is rquired fields." })
    }

    // check existing dept
    try {
        const existingDept = await Department.findOne({ deptId })
        if (existingDept) {
            return res.status(400).json({ message: "A Dept with same ID is already exist!" })
        }
    } catch (error) {
        res.status(500).json(err)
        console.log(err)
    }

    // save new dept
    try {
        const newDept = new Department(req.body)
        const savedDept = await newDept.save()

        setTimeout(() => {
            res.status(201).json(savedDept)
        }, 2000)
    } catch (err) {
        res.status(500).json(err)
        console.log(err)
    }
}

// fetch all depts
const getDepartments = async (req, res) => {
    try {
        const depts = await Department.find()
        setTimeout(() => {
            res.status(201).json(depts)
        }, 2000)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createDepartment,
    getDepartments
}
