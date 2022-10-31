import React from "react"
import { Link } from "react-router-dom"
import "./Table.scss"

const UserTable = ({ columns, data, path }) => {
    return (
        <div className="table-wrapper">
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
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.deptName}</td>
                                <td>{item.deptId}</td>
                                <td>
                                    <Link to={`/${path}/${item._id}`} state={{ item: item }}>
                                        View
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserTable
