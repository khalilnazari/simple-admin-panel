import axios from "./axios"
import {
    addDepartmentFailure,
    addDepartmentStart,
    addDepartmentSuccess,
    getDepartmentStart,
    getDepartmentSuccess,
    getDepartmentFailure,
    updateDepartmentStart,
    updateDepartmentSuccess,
    updateDepartmentFailure,
    deleteDepartmentStart,
    deleteDepartmentFailure,
    deleteDepartmentSuccess
} from "../redux/departmentSlice"

const DEPT_URL = `/department`

// create department
const createDepartment = async (dispatch, data) => {
    dispatch(addDepartmentStart())

    try {
        const response = await axios.post(DEPT_URL, data)
        const result = response.data

        if (response.status === 201) {
            const message = "Department has been added sucessfully."
            dispatch(addDepartmentSuccess({ data: result, message }))
            return true
        } else {
            throw Error("Opps! we could not complete your request. Please try gain.")
        }
    } catch (error) {
        if (error.response.status === 400) {
            dispatch(addDepartmentFailure(error.response.data.message))
        } else {
            dispatch(addDepartmentFailure(error.message))
        }
        console.log("Error in axios: ", error.message)
        return false
    }
}

// get all departments
const getDepartments = async (dispatch) => {
    dispatch(getDepartmentStart())
    try {
        const response = await axios.get(DEPT_URL)
        if (response.status === 201) {
            dispatch(getDepartmentSuccess(response.data))
        } else {
            throw Error("Opps! we could not completed your requrest. Please try again.")
        }
    } catch (error) {
        dispatch(getDepartmentFailure(error.message))
        console.log("Error in axios: ", error.message)
    }
}

// Update Dept.
const updateDepartment = async (dispatch, data, id) => {
    dispatch(updateDepartmentStart())
    try {
        const response = await axios.put(`/department/${id}`, data)
        if (response.status === 201) {
            dispatch(updateDepartmentSuccess({ data: response.data, id }))
            return true
        } else {
            throw Error("Opps! we could not completed your requrest. Please try again.")
        }
    } catch (error) {
        if (error.response.status === 400) {
            dispatch(addDepartmentFailure(error.response.data.message))
        } else {
            dispatch(updateDepartmentFailure(error.message))
        }
        console.log("Error in axios: ", error)
        return false
    }
}

// delete department
const deleteDepartment = async (dispatch, id) => {
    dispatch(deleteDepartmentStart())
    try {
        const response = await axios.delete(`/department/${id}`)
        const message = await response.data.message

        if (message) {
            dispatch(deleteDepartmentSuccess({ id, message }))
            return true
        }
    } catch (error) {
        if (error.response.status === 400) {
            dispatch(deleteDepartmentFailure(error.response.data.message))
        } else {
            dispatch(deleteDepartmentFailure(error.message))
        }
        console.log("Error in axios: ", error)
        return false
    }
}

export { createDepartment, getDepartments, updateDepartment, deleteDepartment }
