import { createSlice } from "@reduxjs/toolkit"

export const ticketSlice = createSlice({
    name: "tickets",

    initialState: {
        tickets: [],
        error: null,
        loading: null
    },

    reducers: {
        getTicketStart: (state) => {
            state.tickets = []
            state.loading = true
            state.error = false
        },
        getTicketSuccess: (state) => {
            state.tickets = [...state.tickets]
            state.loading = false
            state.error = false
        },
        getTicketFailure: (state) => {
            state.tickets = []
            state.loading = false
            state.error = true
        },
        addTicketStart: (state) => {
            state.tickets = [...state.tickets]
            state.loading = true
            state.error = false
        },
        addTicketSuccess: (state, action) => {
            console.log(action)
            state.tickets = [...state.tickets, action.payload]
            state.loading = false
            state.error = false
        },
        addTicketFailure: (state) => {
            state.tickets = [...state.tickets]
            state.loading = false
            state.error = true
        },
        updateTicketStart: (state) => {
            state.tickets = [...state.tickets]
            state.loading = true
            state.error = false
        },
        updateTicketSuccess: (state, action) => {
            state.tickets = state.tickets.map((project) => {
                if (project.id === action.payload.id) {
                    return action.payload.data
                }

                return project
            })
            state.loading = false
            state.error = false
        },
        updateTicketFailure: (state) => {
            state.tickets = [...state.tickets]
            state.loading = false
            state.error = true
        },
        deleteTicketStart: (state) => {
            state.tickets = [...state.tickets]
            state.loading = true
            state.error = false
        },
        deleteTicketSuccess: (state, action) => {
            console.log(action)
            state.tickets = state.tickets.filter(
                (project) => project.id !== action.payload && project
            )
            state.loading = false
            state.error = false
        },
        deleteTicketFailure: (state) => {
            state.tickets = [...state.tickets]
            state.loading = false
            state.error = true
        }
    }
})

// Action creators are generated for each case reducer function
export const {
    addTicketFailure,
    addTicketStart,
    addTicketSuccess,
    updateTicketStart,
    updateTicketSuccess,
    updateTicketFailure,
    deleteTicketFailure,
    deleteTicketStart,
    deleteTicketSuccess
} = ticketSlice.actions

export default ticketSlice.reducer
