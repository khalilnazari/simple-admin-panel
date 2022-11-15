import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./userSlice"
import projectSlice from "./projectSlice"
import ticketSlice from "./ticketSlice"
import departmentSlice from "./departmentSlice"
import roleSlice from "./roleSlice"

export default configureStore({
    reducer: {
        users: userSlice,
        projects: projectSlice,
        tickets: ticketSlice,
        departments: departmentSlice,
        roles: roleSlice
    }
})
