import { projects } from "../../data/projects"
import { PageHeader, TableBody, TableHeader } from "../../components"
import "./Tables.scss"

const Projects = () => {
    const headers = ["Col 1", "Col 2", "Col 3", "Col 4", "Col 5", "Col 6"]
    // jsx
    return (
        <div className="table-wrapper">
            {/* header */}
            <PageHeader />

            {/* body */}
            <div className="table-scroll">
                <table>
                    <TableHeader headers={headers} />
                    <TableBody data={projects} />
                </table>
            </div>
        </div>
    )
}

export default Projects
