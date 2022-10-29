import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "counter",
    initialState: {
        users: [],
        hashasError: null,
        errorMessage: null,
        isLoading: null
    },

    reducers: {
        getUserStart: (state) => {
            state.users = []
            state.isLoading = true
            state.hasError = false
        },
        getUserSuccess: (state, action) => {
            state.users = action.payload
            state.isLoading = false
            state.hasError = false
        },
        getUserFailure: (state, action) => {
            state.users = []
            state.isLoading = false
            state.hasError = true
            state.errorMessage = action.payload
        },
        addUserStart: (state) => {
            state.users = [...state.users]
            state.isLoading = true
            state.hasError = false
        },
        addUserSuccess: (state, action) => {
            state.users = [...state.users, action.payload]
            state.isLoading = false
            state.hasError = false
        },
        addUserFailure: (state, action) => {
            state.users = [...state.users]
            state.isLoading = false
            state.hasError = true
            state.errorMessage = action.payload
        },
        updateUserStart: (state) => {
            state.users = [...state.users]
            state.isLoading = true
            state.hasError = false
        },
        updateUserSuccess: (state, action) => {
            state.users = state.users.map((user) => {
                if (user.id === action.payload.id) {
                    return action.payload.data
                }

                return user
            })
            state.isLoading = false
            state.hasError = false
        },
        updateUserFailure: (state, action) => {
            state.users = [...state.users]
            state.isLoading = false
            state.hasError = true
            state.errorMessage = action.payload
        },
        deleteUserStart: (state) => {
            state.users = [...state.users]
            state.isLoading = true
            state.hasError = false
        },
        deleteUserSuccess: (state, action) => {
            state.users = state.users.filter((user) => user.id !== action.payload && user)
            state.isLoading = false
            state.hasError = false
        },
        deleteUserFailure: (state, action) => {
            state.users = [...state.users]
            state.isLoading = false
            state.hasError = true
            state.errorMessage = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const {
    addUserFailure,
    addUserStart,
    addUserSuccess,
    updateUserStart,
    updateUserSuccess,
    updateUserFailure,
    deleteUserFailure,
    deleteUserStart,
    deleteUserSuccess,
    getUserFailure,
    getUserSuccess,
    getUserStart
} = userSlice.actions

export default userSlice.reducer
