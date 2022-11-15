import { createSlice } from "@reduxjs/toolkit"

export const roleSlice = createSlice({
    name: "departments",
    initialState: {
        roles: [
            {
                id: "1022",
                name: "User"
            },
            {
                id: "1033",
                name: "Admin"
            },
            {
                id: "1044",
                name: "Super Admin"
            }
        ]
    }
})

// Action creators are generated for each case reducer function
export const {} = roleSlice.actions

export default roleSlice.reducer
