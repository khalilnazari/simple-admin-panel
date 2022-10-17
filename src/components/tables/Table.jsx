import React from "react"
import { Link } from "react-router-dom"
import "./Table.scss"

const Table = ({ columns, data }) => {
    return (
        <div className="table-scroll">
            <table>
                {/* header */}
                <thead>
                    <tr>
                        {columns.map((item, index) => (
                            <th key={index}>{item}</th>
                        ))}
                    </tr>
                </thead>

                {/* body */}
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.startDate}</td>
                            <td>{item.deadline}</td>
                            <td>{item.clientName}</td>
                            <td>{item.type}</td>
                            <td>
                                <Link to={`/${item.path}/${item.id}`} state={{ item }}>
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

export default Table
