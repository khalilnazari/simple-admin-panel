import axios from "./axios"

import { addProjectSuccess, addProjectFailure, addProjectStart } from "../redux/projectSlice"

const serverError = "Opps! we could not complete your request. Please try gain."

// create project
const createProject = async (dispatch, data) => {
    dispatch(addProjectStart())

    try {
        const response = await axios.post(`/project`, data)
        if (response.status === 201) {
            dispatch(addProjectSuccess(response.data))
            return true
        } else {
            throw Error(serverError)
        }
    } catch (error) {
        if (error.response.status === 400) {
            dispatch(addProjectFailure(error.response.data.message))
        } else if (error.response.status === 401) {
            dispatch(addProjectFailure(error.response.data.message))
        } else if (error.response.status === 500) {
            dispatch(addProjectFailure(error.response.data.message))
        } else {
            dispatch(addProjectFailure(error.message))
        }

        console.log("Error in axios: ", error.message)
        return false
    }
}

export { createProject }
