import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Swal from "sweetalert2"
import { AlertError, AlertSuccess, Loading, PageHeader } from "../../components"
import { deleteProject } from "../../api/projectApi"
import "./Project.scss"

const Project = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()

    const { projects, hasError, errorMessage, isLoading, successMessage } = useSelector(
        (state) => state.projects
    )
    const project = projects.find((dept) => dept._id === id)

    const deleteDept = async () => {
        const res = await deleteProject(dispatch, project._id)
        if (res) {
            Swal.fire("Deleted!", "The project has been deleted.", "success")
            setTimeout(() => {
                navigate("/projects")
            }, 1000)
        } else {
            Swal.fire("Error", "The project couldn't be deleted.", "error")
        }
    }

    // handle Delete department
    const handleDelete = async () => {
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
                link={`/project-update/${project?._id}`}
                addButtonText="Update details"
            />

            {/* Errors */}
            {hasError && <AlertError message={errorMessage} />}
            {successMessage && <AlertSuccess message={successMessage} />}

            {/* body */}
            <div className="pageBody">
                <div className="boxes">
                    <div className="box">{project?.projectName}</div>
                    <div className="box">{project?.projectId}</div>
                    <div className="box">{project?.projectManager}</div>
                    <div className="box">{project?.clientName}</div>
                    <div className="box">{project?.clientEmail}</div>
                    <div className="box">{project?.projectManager}</div>
                </div>
            </div>

            {/* footer */}
            <div className="footer">
                <button className="btn btn-danger" type="button" onClick={handleDelete}>
                    Delete Department
                </button>
            </div>
        </div>
    )
}

export default Project
