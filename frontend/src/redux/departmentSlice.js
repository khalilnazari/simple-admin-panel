import { createSlice } from "@reduxjs/toolkit"

export const departmentSlice = createSlice({
    name: "departments",
    initialState: {
        departments: [],
        hashasError: null,
        errorMessage: null,
        isLoading: null,
        successMessage: null
    },

    reducers: {
        getDepartmentStart: (state) => {
            state.departments = []
            state.isLoading = true
            state.hasError = false
            state.successMessage = null
        },
        getDepartmentSuccess: (state, action) => {
            state.departments = action.payload
            state.isLoading = false
            state.hasError = false
        },
        getDepartmentFailure: (state, action) => {
            state.departments = []
            state.isLoading = false
            state.hasError = true
            state.errorMessage = action.payload
            state.successMessage = null
        },
        addDepartmentStart: (state) => {
            state.departments = [...state.departments]
            state.isLoading = true
            state.hasError = false
            state.errorMessage = null
            state.successMessage = null
        },
        addDepartmentSuccess: (state, action) => {
            state.departments = [...state.departments, action.payload]
            state.isLoading = false
            state.hasError = false
            state.errorMessage = null
            state.successMessage = action.payload.message
        },
        addDepartmentFailure: (state, action) => {
            state.departments = [...state.departments]
            state.isLoading = false
            state.hasError = true
            state.errorMessage = action.payload
            state.successMessage = null
        },
        updateDepartmentStart: (state) => {
            state.departments = [...state.departments]
            state.isLoading = true
            state.hasError = false
            state.successMessage = null
        },
        updateDepartmentSuccess: (state, action) => {
            state.departments = state.departments.map((dept) => {
                if (dept._id === action.payload.id) {
                    return action.payload.data
                }

                return dept
            })
            state.isLoading = false
            state.hasError = false
        },
        updateDepartmentFailure: (state, action) => {
            state.departments = [...state.departments]
            state.isLoading = false
            state.hasError = true
            state.errorMessage = action.payload
            state.successMessage = null
        },
        deleteDepartmentStart: (state) => {
            state.departments = [...state.departments]
            state.isLoading = true
            state.hasError = false
            state.successMessage = null
        },
        deleteDepartmentSuccess: (state, action) => {
            state.departments = state.departments.filter((department) => {
                if (department._id !== action.payload.id) {
                    return department
                }
                return null
            })
            state.isLoading = false
            state.hasError = false
            state.successMessage = action.payload.message
        },
        deleteDepartmentFailure: (state, action) => {
            state.departments = [...state.departments]
            state.isLoading = false
            state.hasError = true
            state.errorMessage = action.payload
            state.successMessage = null
        }
    }
})

// Action creators are generated for each case reducer function
export const {
    addDepartmentFailure,
    addDepartmentStart,
    addDepartmentSuccess,
    updateDepartmentStart,
    updateDepartmentSuccess,
    updateDepartmentFailure,
    deleteDepartmentFailure,
    deleteDepartmentStart,
    deleteDepartmentSuccess,
    getDepartmentFailure,
    getDepartmentSuccess,
    getDepartmentStart
} = departmentSlice.actions

export default departmentSlice.reducer
