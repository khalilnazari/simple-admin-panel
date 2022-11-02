import "./Departments.scss"
import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AlertError, PageHeader, DepartmentTable } from "../../components"
import { getDepartments } from "../../api/departmentApi"

const Departments = () => {
    // table columns
    const columns = ["Dept. Name", "Dept. ID", "View"]
    const dispatch = useDispatch()

    // state
    const { departments, isLoading, hasError, errorMessage } = useSelector(
        (state) => state.departments
    )

    // mount
    useEffect(() => {
        getDepartments(dispatch)
    }, [])

    // handle search users
    const handleSearch = (val) => {
        console.log("search text....", val)
    }

    // jsx
    return (
        <div className="">
            <PageHeader
                link="/department-add"
                title="Departments"
                handleSearch={handleSearch}
                searchPlaceholder="Search departments ..."
                addButtonText="Add Department"
            />

            {hasError && <AlertError message={errorMessage} />}

            {isLoading ? (
                <div>Loading..</div>
            ) : (
                <DepartmentTable data={departments} columns={columns} path="department" />
            )}
        </div>
    )
}

export default Departments
