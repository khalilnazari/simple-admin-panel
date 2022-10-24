import React from "react"
import "./TicketTab.scss"

const TicketTab = ({ handleTabNavigation }) => {
    return (
        <div className="ticketsTabs">
            <div className="ticketTab overviewTab" id="overviewTab" onClick={handleTabNavigation}>
                Overview
            </div>
            <div className="ticketTab newTab" id="newTab" onClick={handleTabNavigation}>
                New
            </div>
            <div className="ticketTab overdueTab" id="overdueTab" onClick={handleTabNavigation}>
                Overdue
            </div>
            <div className="ticketTab stackTab" id="stackTab" onClick={handleTabNavigation}>
                Stack
            </div>
            <div className="ticketTab completeTab" id="completeTab" onClick={handleTabNavigation}>
                Completed
            </div>
        </div>
    )
}

export default TicketTab
