import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./userSlice"
import projectSlice from "./projectSlice"

export default configureStore({
    reducer: {
        users: userSlice,
        projects: projectSlice
    }
})
