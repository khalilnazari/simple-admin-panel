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
        res.status(201).json(savedDept)
    } catch (err) {
        res.status(500).json(err)
        console.log(err)
    }
}

// fetch all depts
const getDepartments = async (req, res) => {
    try {
        const depts = await Department.find()
        res.status(201).json(depts)
    } catch (error) {
        console.log(error)
    }
}

// fetch One dept
const getDepartment = async (req, res) => {
    const { id } = req.body

    try {
        const dept = await Department.findOne(id)
        res.status(201).json(dept)
    } catch (error) {
        console.log(error)
    }
}

// update Dept
const updateDepartment = async (req, res) => {
    const { id } = req.body
    try {
        const updatedUser = await Department.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        )
        res.status(201).json(updatedUser)
    } catch (error) {
        console.log(error)
    }
}

// delete Dept
const deleteDepartment = async (req, res) => {
    const { id } = req.body
    try {
        const result = await Department.findByIdAndDelete(id)
        res.status(201).json({ message: "The dept has been deleted successfully." })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createDepartment,
    getDepartments,
    updateDepartment,
    deleteDepartment
}
