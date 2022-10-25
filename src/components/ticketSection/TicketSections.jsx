import React from "react"
import "./TicketSections.scss"
import TicketsTables from "../ticketsTable/TicketsTable"

const TicketSections = ({ tab, tabId, title, ticketList, columns, classList, overview }) => {
    const OverviewSection = () => (
        <div className={tabId === tab ? `${classList} show` : classList}>
            <p className="sectionTitle">{title}</p>
            <div className="boxes">
                <div className="box newBox">
                    <span className="text">{ticketList.newTicketText}</span>
                    <span className="count">{ticketList.newTicketLength}</span>
                </div>
                <div className="box overdueBox">
                    <span className="text">{ticketList.overdueTicketText}</span>
                    <span className="count">{ticketList.overdueTicketLength}</span>
                </div>
                <div className="box stackBox">
                    <span className="text">{ticketList.stackTicketText}</span>
                    <span className="count">{ticketList.stackTicketLength}</span>
                </div>
                <div className="box completeBox">
                    <span className="text">{ticketList.completeTicketText}</span>
                    <span className="count">{ticketList.completeTicketLength}</span>
                </div>
            </div>
        </div>
    )

    const TicketSections = () => (
        <div className={tabId === tab ? `${classList} show` : classList}>
            <p className="sectionTitle">{title}</p>
            <TicketsTables tickets={ticketList} columns={columns} path="ticket" />
        </div>
    )

    return overview ? <OverviewSection /> : <TicketSections />
}

export default TicketSections
