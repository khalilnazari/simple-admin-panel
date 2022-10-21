import React from "react"
import { Link } from "react-router-dom"
import "./Table.scss"

const ProjectTable = ({ columns, data, path }) => {
    console.log(data)

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
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.projectName}</td>
                                <td>{item.clientName}</td>
                                <td>{item.joinDate}</td>
                                <td>
                                    <Link to={`/${path}/${item.id}`} state={{ item: item }}>
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

export default ProjectTable
