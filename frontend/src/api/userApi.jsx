import axios from "./axios"
import {
    addUserFailure,
    addUserStart,
    addUserSuccess,
    getUserFailure,
    getUserStart,
    getUserSuccess
} from "../redux/userSlice"

// Fetch all users
const getUsers = (dispatch) => {
    dispatch(getUserStart())
    axios
        .get(`/user`)
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
        let response = await axios.get(`/user/${id}`)
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
        const response = await axios.post(`/user`, data)
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

export { getUsers, createUser, getUser }
