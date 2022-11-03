import { createSlice } from "@reduxjs/toolkit"

export const projectSlice = createSlice({
    name: "projects",
    initialState: {
        projects: [],
        hasError: null,
        errorMessage: null,
        isLoading: null
    },

    reducers: {
        getProjectStart: (state) => {
            state.projects = []
            state.isLoading = true
            state.hasError = false
            state.errorMessage = null
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
        },
        updateProjectSuccess: (state, action) => {
            state.projects = state.projects.map((project) => {
                if (project.id === action.payload.id) {
                    return action.payload.data
                }

                return project
            })
            state.isLoading = false
            state.hasError = false
        },
        updateProjectFailure: (state) => {
            state.projects = [...state.projects]
            state.isLoading = false
            state.hasError = true
        },
        deleteProjectStart: (state) => {
            state.projects = [...state.projects]
            state.isLoading = true
            state.hasError = false
        },
        deleteProjectSuccess: (state, action) => {
            console.log(action)
            state.projects = state.projects.filter(
                (project) => project.id !== action.payload && project
            )
            state.isLoading = false
            state.hasError = false
        },
        deleteProjectFailure: (state) => {
            state.projects = [...state.projects]
            state.isLoading = false
            state.hasError = true
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
