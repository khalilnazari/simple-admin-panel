import axios from "axios"
import {
    addUserFailure,
    addUserStart,
    addUserSuccess,
    getUserFailure,
    getUserStart,
    getUserSuccess
} from "../redux/userSlice"

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

// create user
const createUser = (dispatch, data) => {
    dispatch(addUserStart())

    axios
        .post(`${baseURL}/user`, data)
        .then(function (response) {
            if (response.status === 201) {
                dispatch(addUserSuccess(response.data))
            }
        })
        .catch(function (error) {
            dispatch(addUserFailure(error.message))
            console.log("Error in axios: ", error)
        })
}

export { getUsers, createUser }
