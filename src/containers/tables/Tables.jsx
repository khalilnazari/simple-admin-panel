import { projects } from "../../data/data"
import { PageHeader, Table } from "../../components"

const Projects = () => {
    const columns = ["Col 1", "Col 2", "Col 3", "Col 4", "Col 5", "Col 6"]
    // jsx
    return (
        <div className="table-wrapper">
            {/* header */}
            <PageHeader />

            {/* body */}
            <Table data={projects} columns={columns} />
        </div>
    )
}

export default Projects
