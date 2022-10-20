import React from "react"
import { PageHeader, UserTable } from "../../components"
import { useSelector } from "react-redux"

const Projects = () => {
    const { projects } = useSelector((state) => state.projects)

    const handleSearch = (val) => {
        console.log("search text....", val)
    }

    // tables headers
    const columns = ["Project name", "Client", "Join date", "View"]

    // jsx
    return (
        <>
            <PageHeader
                link="/add-project"
                title="Projects"
                handleSearch={handleSearch}
                searchPlaceholder="Search user..."
                addButtonText="Add Project"
            />

            <UserTable data={projects} columns={columns} path="project" />
        </>
    )
}

export default Projects
