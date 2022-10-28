import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "counter",
    initialState: {
        users: [],
        error: null,
        loading: null
    },

    reducers: {
        getUserStart: (state) => {
            state.users = []
            state.loading = true
            state.error = false
        },
        getUserSuccess: (state) => {
            state.users = [...state.users]
            state.loading = false
            state.error = false
        },
        getUserFailure: (state) => {
            state.users = []
            state.loading = false
            state.error = true
        },
        addUserStart: (state) => {
            state.users = [...state.users]
            state.loading = true
            state.error = false
        },
        addUserSuccess: (state, action) => {
            state.users = [...state.users, action.payload]
            state.loading = false
            state.error = false
        },
        addUserFailure: (state) => {
            state.users = [...state.users]
            state.loading = false
            state.error = true
        },
        updateUserStart: (state) => {
            state.users = [...state.users]
            state.loading = true
            state.error = false
        },
        updateUserSuccess: (state, action) => {
            state.users = state.users.map((user) => {
                if (user.id === action.payload.id) {
                    return action.payload.data
                }

                return user
            })
            state.loading = false
            state.error = false
        },
        updateUserFailure: (state) => {
            state.users = [...state.users]
            state.loading = false
            state.error = true
        },
        deleteUserStart: (state) => {
            state.users = [...state.users]
            state.loading = true
            state.error = false
        },
        deleteUserSuccess: (state, action) => {
            state.users = state.users.filter((user) => user.id !== action.payload && user)
            state.loading = false
            state.error = false
        },
        deleteUserFailure: (state) => {
            state.users = [...state.users]
            state.loading = false
            state.error = true
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
    deleteUserSuccess
} = userSlice.actions

export default userSlice.reducer
