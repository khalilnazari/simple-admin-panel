import { Link } from "react-router-dom"
import { projects } from "../../data/projects"
import "./Tables.scss"
import { PageHeader } from "../../components"

const Projects = () => {
    // jsx
    return (
        <div className="table-wrapper">
            {/* header */}
            <PageHeader />

            {/* body */}
            <div className="table-scroll">
                <table>
                    <TableHader />
                    <TableBody />
                </table>
            </div>
        </div>
    )
}

const TableBody = () => {
    return (
        <tbody>
            {projects.map((project) => (
                <tr key={project.id}>
                    <td>{project.name}</td>
                    <td>{project.startDate}</td>
                    <td>{project.deadline}</td>
                    <td>{project.clientName}</td>
                    <td>{project.type}</td>
                    <td>
                        <Link to={`/project/${project.id}`} state={{ project: project }}>
                            View
                        </Link>
                    </td>
                </tr>
            ))}
        </tbody>
    )
}

const TableHader = () => {
    return (
        <thead>
            <tr>
                <th>Project Name</th>
                <th>Start date</th>
                <th>Deadline</th>
                <th>Client</th>
                <th>Type</th>
                <th>Detail</th>
            </tr>
        </thead>
    )
}

export default Projects
