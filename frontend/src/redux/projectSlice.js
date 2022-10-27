import { createSlice } from "@reduxjs/toolkit"

export const projectSlice = createSlice({
    name: "projects",
    initialState: {
        projects: [],
        error: null,
        loading: null
    },

    reducers: {
        getProjectStart: (state) => {
            state.projects = []
            state.loading = true
            state.error = false
        },
        getProjectSuccess: (state) => {
            state.projects = [...state.projects]
            state.loading = false
            state.error = false
        },
        getProjectFailure: (state) => {
            state.projects = []
            state.loading = false
            state.error = true
        },
        addProjectStart: (state) => {
            state.projects = [...state.projects]
            state.loading = true
            state.error = false
        },
        addProjectSuccess: (state, action) => {
            console.log(action)
            state.projects = [...state.projects, action.payload]
            state.loading = false
            state.error = false
        },
        addProjectFailure: (state) => {
            state.projects = [...state.projects]
            state.loading = false
            state.error = true
        },
        updateProjectStart: (state) => {
            state.projects = [...state.projects]
            state.loading = true
            state.error = false
        },
        updateProjectSuccess: (state, action) => {
            state.projects = state.projects.map((project) => {
                if (project.id === action.payload.id) {
                    return action.payload.data
                }

                return project
            })
            state.loading = false
            state.error = false
        },
        updateProjectFailure: (state) => {
            state.projects = [...state.projects]
            state.loading = false
            state.error = true
        },
        deleteProjectStart: (state) => {
            state.projects = [...state.projects]
            state.loading = true
            state.error = false
        },
        deleteProjectSuccess: (state, action) => {
            console.log(action)
            state.projects = state.projects.filter(
                (project) => project.id !== action.payload && project
            )
            state.loading = false
            state.error = false
        },
        deleteProjectFailure: (state) => {
            state.projects = [...state.projects]
            state.loading = false
            state.error = true
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
    deleteProjectSuccess
} = projectSlice.actions

export default projectSlice.reducer
