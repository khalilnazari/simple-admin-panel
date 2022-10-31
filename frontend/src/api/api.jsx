import axios from "axios"
import {
    addUserFailure,
    addUserStart,
    addUserSuccess,
    getUserFailure,
    getUserStart,
    getUserSuccess
} from "../redux/userSlice"

import {
    addDepartmentFailure,
    addDepartmentStart,
    addDepartmentSuccess,
    getDepartmentStart,
    getDepartmentSuccess,
    getDepartmentFailure
} from "../redux/departmentSlice"

const baseURL = "http://localhost:5000/api"

// Fetch all users
const getUsers = (dispatch) => {
    dispatch(getUserStart())
    axios
        .get(`${baseURL}/user`)
        .then(function (response) {
            if (response.status === 201) {
                dispatch(getUserSuccess(response.data))
            }
        })
        .catch(function (error) {
            dispatch(getUserFailure(error.message))
            console.log("Error in axios: ", error.message)
        })
}

// get one user
const getUser = async (id) => {
    try {
        let response = await axios.get(`${baseURL}/user/${id}`)
        let result = await response.data

        if (response.status === 201) {
            return result
        } else {
            throw Error("Opps! we could not complete your request. Please try gain.")
        }
    } catch (error) {
        console.log("Error in axios: ", error.message)
        return error.message
    }
}

// create user
const createUser = async (dispatch, data) => {
    dispatch(addUserStart())

    try {
        const response = await axios.post(`${baseURL}/user`, data)
        const result = response.data

        if (response.status === 201) {
            dispatch(addUserSuccess(result))
            return true
        } else {
            throw Error("Opps! we could not complete your request. Please try gain.")
        }
    } catch (error) {
        if (error.response.status === 400) {
            dispatch(addUserFailure(error.response.data.message))
        } else {
            dispatch(addUserFailure(error.message))
        }

        console.log("Error in axios: ", error.message)
        return false
    }
}

/****************************************** Department API ********************************** */
const DEPT_URL = `${baseURL}/department`
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
export { getUsers, createUser, getUser, createDepartment, getDepartments }
