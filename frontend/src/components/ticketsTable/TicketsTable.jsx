import "./TicketTables.scss"
import { Link } from "react-router-dom"

const TicketsTables = ({ columns, tickets, path }) => {
    return (
        <div className="ticketTableWrapper">
            <table className="ticketTable">
                <thead>
                    <tr className="headRow">
                        {columns.map((item, index) => (
                            <th key={index}>{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tickets.map((item, index) => (
                        <tr key={index} className="bodyRow">
                            <td
                                className={
                                    item.status === "completed"
                                        ? "complete"
                                        : item.status === "stack"
                                        ? "stack"
                                        : item.status === "overdue"
                                        ? "overdue"
                                        : "new"
                                }
                            >
                                {item.title}
                            </td>
                            <td>{item.deadline}</td>
                            <td>{item.status}</td>
                            <td>{item.createdBy}</td>
                            <td>
                                <Link to={`/${path}/${item.id}`} state={{ ticket: item }}>
                                    View
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TicketsTables
