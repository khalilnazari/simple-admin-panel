import { createSlice } from "@reduxjs/toolkit"

export const projectSlice = createSlice({
    name: "projects",
    initialState: {
        projects: [],
        hasError: null,
        errorMessage: null,
        isLoading: null,
        successMessage: null
    },

    reducers: {
        getProjectStart: (state) => {
            state.projects = []
            state.isLoading = true
            state.hasError = false
            state.errorMessage = null
            state.successMessage = null
        },
        getProjectSuccess: (state, action) => {
            state.projects = action.payload
            state.isLoading = false
            state.hasError = false
        },
        getProjectFailure: (state) => {
            state.projects = []
            state.isLoading = false
            state.hasError = true
            state.successMessage = null
        },
        addProjectStart: (state) => {
            state.projects = [...state.projects]
            state.isLoading = true
            state.hasError = false
            state.errorMessage = null
            state.successMessage = null
        },
        addProjectSuccess: (state, action) => {
            state.projects = [...state.projects, action.payload.data]
            state.isLoading = false
            state.hasError = false
            state.errorMessage = null
            state.successMessage = action.payload.message
        },
        addProjectFailure: (state, action) => {
            state.projects = [...state.projects]
            state.isLoading = false
            state.hasError = true
            state.errorMessage = action.payload
            state.successMessage = null
        },
        updateProjectStart: (state) => {
            state.projects = [...state.projects]
            state.isLoading = true
            state.hasError = false
            state.successMessage = null
        },
        updateProjectSuccess: (state, action) => {
            state.projects = state.projects.map((project) => {
                if (project.id === action.payload.id) {
                    return action.payload.data
                }

                return project
            })
            state.successMessage = action.payload.message
            state.isLoading = false
            state.hasError = false
        },
        updateProjectFailure: (state) => {
            state.projects = [...state.projects]
            state.isLoading = false
            state.hasError = true
            state.successMessage = null
        },
        deleteProjectStart: (state) => {
            state.projects = [...state.projects]
            state.isLoading = true
            state.hasError = false
            state.successMessage = null
        },
        deleteProjectSuccess: (state, action) => {
            state.projects = state.projects.filter(
                (project) => project._id !== action.payload.id && project
            )
            state.isLoading = false
            state.hasError = false
            state.successMessage = action.payload.message
        },
        deleteProjectFailure: (state) => {
            state.projects = [...state.projects]
            state.isLoading = false
            state.hasError = true
            state.successMessage = null
        }
    }
})

// Action creators are generated for each case reducer function
export const {
    addProjectFailure,
    addProjectStart,
    addProjectSuccess,
    updateProjectStart,
    updateProjectSuccess,
    updateProjectFailure,
    deleteProjectFailure,
    deleteProjectStart,
    deleteProjectSuccess,
    getProjectStart,
    getProjectSuccess,
    getProjectFailure
} = projectSlice.actions

export default projectSlice.reducer
