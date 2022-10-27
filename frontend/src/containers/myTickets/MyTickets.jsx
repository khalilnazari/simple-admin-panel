import React, { useState } from "react"
import { useSelector } from "react-redux"
import { PageHeader, TicketSections, TicketTab } from "../../components"
import "./myTickets.scss"

const MyTickets = () => {
    const { tickets } = useSelector((state) => state.tickets)
    const [tabId, setTabId] = useState("overviewTab")

    // overdue
    const overdueTickets = tickets.filter((ticket) => ticket.status === "overdue")

    // new tickets
    const newTickets = tickets.filter((ticket) => ticket.status === "new")

    // stack tickets
    const stackTickets = tickets.filter((ticket) => ticket.status === "stack")

    // completed tickets
    const completedTickets = tickets.filter((ticket) => ticket.status === "completed")

    // handleTabNavigation
    const handleTabNavigation = (e) => {
        setTabId(e.target.id)
    }

    // columns
    const columns = ["Ticket title", "Deadline", "Status", "Created By", "View"]

    // jsx
    return (
        <div className="tickets">
            {/* Page header */}
            <PageHeader link="/ticket-add" title="Tickets" addButtonText="New Tickets" />

            {/* tabs */}
            <TicketTab handleTabNavigation={handleTabNavigation} />

            {/* sections */}
            <TicketSections
                tab="overviewTab"
                tabId={tabId}
                classList="ticketSection overviewSection"
                title="Overview"
                ticketList={{
                    newTicketText: "New Ticket",
                    newTicketLength: newTickets.length,
                    overdueTicketText: "Overdue Ticket",
                    overdueTicketLength: overdueTickets.length,
                    stackTicketText: "Stack Ticket",
                    stackTicketLength: stackTickets.length,
                    completeTicketText: "Complete Ticket",
                    completeTicketLength: completedTickets.length
                }}
                columns={columns}
                overview={true}
            />

            <TicketSections
                tab="newTab"
                tabId={tabId}
                classList="ticketSection newSection"
                title="New Tickets"
                ticketList={newTickets}
                columns={columns}
                overvew={false}
            />

            <TicketSections
                tab="overdueTab"
                tabId={tabId}
                classList="overdueSection ticketSection"
                title="Overdue Tickets"
                ticketList={overdueTickets}
                columns={columns}
                overvew={false}
            />

            <TicketSections
                tab="stackTab"
                tabId={tabId}
                classList="stackSection ticketSection"
                title="Stack Tickets"
                ticketList={stackTickets}
                columns={columns}
                overvew={false}
            />

            <TicketSections
                tab="completeTab"
                tabId={tabId}
                classList="ticketSection completeSection"
                title="Completed Tickets"
                ticketList={completedTickets}
                columns={columns}
                overvew={false}
            />
        </div>
    )
}

export default MyTickets
