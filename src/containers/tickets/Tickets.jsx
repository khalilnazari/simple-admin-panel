import React from "react"
import { useSelector } from "react-redux"
import { PageHeader } from "../../components"
import TicketsTables from "../../components/ticketsTable/TicketsTable"

const Tickets = () => {
    // columns
    const columns = ["Ticket title", "Deadline", "Status", "Created By", "View"]
    const { tickets } = useSelector((state) => state.tickets)

    const handleSearch = (val) => {
        console.log("search text....", val)
    }

    // jsx
    return (
        <div className="">
            <PageHeader
                link="/ticket-add"
                title="Tickets"
                handleSearch={handleSearch}
                searchPlaceholder="Search ticket..."
                addButtonText="Add Tickets"
            />

            <TicketsTables tickets={tickets} columns={columns} path="ticket" />
        </div>
    )
}

export default Tickets
