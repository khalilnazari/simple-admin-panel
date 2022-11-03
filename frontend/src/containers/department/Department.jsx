import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Swal from "sweetalert2"
import { AlertError, Loading, PageHeader } from "../../components"
import { deleteDepartment } from "../../api/departmentApi"
import "./Department.scss"

const Department = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const [department, setDepartment] = useState({})
    const { departments, hasError, errorMessage, isLoading, successMessage } = useSelector(
        (state) => state.departments
    )

    useEffect(() => {
        const dept = departments.find((dept) => dept._id === id)
        setDepartment(dept)
    }, [])

    const deleteDept = async () => {
        const res = await deleteDepartment(dispatch, department._id)
        if (res) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success")
        }
    }

    // handle Delete department
    const handleDeleteDepartment = async () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteDept()
            }
        })
    }

    // jsx
    return (
        <div>
            {/* isLoading  */}
            {isLoading && <Loading loadingMessage="Deleting Department" />}

            {/* header */}
            <PageHeader
                title="Department"
                link={`/department-update/${department._id}`}
                addButtonText="Update details"
            />

            {/* Errors */}
            {hasError && <AlertError message={errorMessage} />}
            {successMessage && <AlertError message={successMessage} />}

            {/* body */}
            <div className="pageBody">
                <div className="boxes">
                    <div className="box">{department.deptName}</div>
                    <div className="box">{department.deptId}</div>
                    <div className="box">{department.deptHead}</div>
                </div>
            </div>

            {/* footer */}
            <div className="footer">
                <button className="btn btn-danger" type="button" onClick={handleDeleteDepartment}>
                    Delete Department
                </button>
            </div>
        </div>
    )
}

export default Department
