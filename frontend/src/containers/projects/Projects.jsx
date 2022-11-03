import React from "react"
import { AlertError, PageHeader, ProjectTable } from "../../components"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getProjects } from "../../api/projectApi"

const Projects = () => {
    const dispatch = useDispatch()
    const { projects, isLoading, hasError, errorMessage } = useSelector((state) => state.projects)

    // call to fetch projects
    useEffect(() => {
        getProjects(dispatch)
    }, [])

    // handle search
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

            {/* Loading */}
            {isLoading && <p>Loading...</p>}

            {/* Alert */}
            {hasError && <AlertError message={errorMessage} />}

            <ProjectTable data={projects} columns={columns} path="project" />
        </>
    )
}

export default Projects
