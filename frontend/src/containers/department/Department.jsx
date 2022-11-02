import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { PageHeader } from "../../components"
import "./Department.scss"

const Department = () => {
    const { id } = useParams()
    const { departments } = useSelector((state) => state.departments)
    const department = departments.find((dept) => dept._id === id)

    // jsx
    return (
        <div>
            {/* header */}
            <PageHeader
                title="Department"
                link={`/department-update/${department._id}`}
                addButtonText="Update details"
            />

            {/* body */}
            <div className="pageBody">
                <div className="boxes">
                    <div className="box">{department.deptName}</div>
                    <div className="box">{department.deptId}</div>
                    <div className="box">{department.deptHead}</div>
                </div>
            </div>
        </div>
    )
}

export default Department
