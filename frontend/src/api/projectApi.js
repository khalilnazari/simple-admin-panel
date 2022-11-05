import axios from "./axios"

import {
    addProjectSuccess,
    addProjectFailure,
    addProjectStart,
    getProjectStart,
    getProjectSuccess,
    getProjectFailure,
    deleteProjectStart,
    deleteProjectSuccess,
    deleteProjectFailure
} from "../redux/projectSlice"

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

// get all projects.
const getProjects = async (dispatch) => {
    dispatch(getProjectStart())

    try {
        const response = await axios.get(`/project`)
        if (response.status === 201) {
            dispatch(getProjectSuccess(response.data))
            console.log(response.data)
            return true
        } else {
            throw Error(serverError)
        }
    } catch (error) {
        if (error.response.status === 400) {
            dispatch(getProjectFailure(error.response.data.message))
        } else if (error.response.status === 401) {
            dispatch(getProjectFailure(error.response.data.message))
        } else if (error.response.status === 500) {
            dispatch(getProjectFailure(error.response.data.message))
        } else {
            dispatch(getProjectFailure(error.message))
        }

        console.log("Error in axios: ", error.message)
        return false
    }
}

// update project
const updateProject = async () => {}

// delete project.
const deleteProject = async (dispatch, id) => {
    dispatch(deleteProjectStart())
    try {
        const response = await axios.delete(`/project/${id}`)
        const message = await response.data.message

        if (message) {
            dispatch(deleteProjectSuccess({ id, message }))
            return true
        }
    } catch (error) {
        if (error.response.status === 400) {
            dispatch(deleteProjectFailure(error.response.data.message))
        } else if (error.response.status === 401) {
            dispatch(deleteProjectFailure(error.response.data.message))
        } else if (error.response.status === 500) {
            dispatch(deleteProjectFailure(error.response.data.message))
        } else {
            dispatch(deleteProjectFailure(error.message))
        }
        console.log("Error in axios: ", error)
        return false
    }
}

export { createProject, getProjects, deleteProject }
