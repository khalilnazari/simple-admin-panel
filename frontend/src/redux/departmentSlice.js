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
        },
        addDepartmentStart: (state) => {
            state.departments = [...state.departments]
            state.isLoading = true
            state.hasError = false
            state.errorMessage = null
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
        },
        updateDepartmentStart: (state) => {
            state.departments = [...state.departments]
            state.isLoading = true
            state.hasError = false
        },
        updateDepartmentSuccess: (state, action) => {
            state.departments = state.departments.map((user) => {
                if (user.id === action.payload.id) {
                    return action.payload.data
                }

                return user
            })
            state.isLoading = false
            state.hasError = false
        },
        updateDepartmentFailure: (state, action) => {
            state.departments = [...state.departments]
            state.isLoading = false
            state.hasError = true
            state.errorMessage = action.payload
        },
        deleteDepartmentStart: (state) => {
            state.departments = [...state.departments]
            state.isLoading = true
            state.hasError = false
        },
        deleteDepartmentSuccess: (state, action) => {
            state.departments = state.departments.filter(
                (dept) => dept.id !== action.payload && dept
            )
            state.isLoading = false
            state.hasError = false
        },
        deleteDepartmentFailure: (state, action) => {
            state.departments = [...state.departments]
            state.isLoading = false
            state.hasError = true
            state.errorMessage = action.payload
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
