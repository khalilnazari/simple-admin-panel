import React from "react"
import { Link } from "react-router-dom"
const TableBody = ({ data }) => {
    return (
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
    )
}

export default TableBody
