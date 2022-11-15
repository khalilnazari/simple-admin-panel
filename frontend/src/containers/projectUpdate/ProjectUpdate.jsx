import { useCallback, useState } from "react"
import Swal from "sweetalert2"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { FaSpinner } from "react-icons/fa"
import {
    AlertError,
    AlertSuccess,
    FormContainer,
    Loading,
    PageHeader,
    SelectInput,
    TextInput
} from "../../components"

import { updateProject } from "../../api/projectApi"

const ProjectUpdate = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
    const { projects, hasError, errorMessage, successMessage, isLoading } = useSelector(
        (state) => state.projects
    )
    const project = projects.find((project) => project._id === id)

    // department
    const { departments } = useSelector((state) => state.departments)
    const departmentsName = departments.map((dept) => dept.deptName)

    // state
    const [deptName, setDeptName] = useState("")
    const [input, setInput] = useState({
        projectName: project?.projectName || "",
        clientName: project?.clientName || "",
        clientEmail: project?.clientEmail || "",
        department: project?.department || {}
    })

    const handleInputChange = useCallback(
        (e) => {
            setInput({ ...input, [e.target.name]: e.target.value })
        },
        [input]
    )

    // handle input changes
    const handleInputDeptChange = (e) => {
        const { _id: departmentId, deptName } = departments.find(
            (dept) => dept.deptName === e.target.value
        )
        setInput({ ...input, [e.target.name]: { departmentId, deptName } })
        setDeptName(e.target.value)
    }

    const projectUpdateApi = async () => {
        const res = await updateProject(dispatch, input, id)
        if (res) {
            Swal.fire("Saved!", "Changes has been saved.222", "success")
            setTimeout(() => {
                console.log(`loginto : /department/${id}`)
                navigate(`/project/${id}`)
            }, 1000)
        } else {
            Swal.fire("Oppos!", "An error ocurred, please try again.", "error")
        }
    }

    // update project
    const handleUpdate = async (e) => {
        e.preventDefault()

        Swal.fire({
            title: "Do you want to save the changes?",
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            if (result.isConfirmed) {
                projectUpdateApi()
            }
        })
    }

    // jsx
    return (
        <div className="project">
            {/* isLoading  */}
            {isLoading && <Loading loadingMessage="Deleting Department" />}

            {/* Page title */}
            <PageHeader title="Project Details" />

            {/* Errors */}
            {hasError && <AlertError message={errorMessage} />}
            {successMessage && <AlertSuccess message={successMessage} />}

            {/* Page body */}
            <div className="formWrapper">
                <FormContainer>
                    <form onSubmit={handleUpdate}>
                        <div className="inputContainer">
                            <TextInput
                                label="Project name"
                                id="projectName"
                                type="text"
                                name="projectName"
                                placeholder="Enter project name"
                                value={input.projectName}
                                handleValue={handleInputChange}
                            />

                            <TextInput
                                label="Client Name"
                                id="clientName"
                                type="text"
                                name="clientName"
                                placeholder="Enter client name"
                                value={input.clientName}
                                handleValue={handleInputChange}
                            />

                            <TextInput
                                label="Client email"
                                id="clientEmail"
                                type="text"
                                name="clientEmail"
                                placeholder="Enter client name"
                                value={input.clientEmail}
                                handleValue={handleInputChange}
                            />

                            {/* department */}
                            <SelectInput
                                label="Department"
                                id="department"
                                name="department"
                                value={deptName}
                                options={departmentsName}
                                handleValue={handleInputDeptChange}
                                errorMessage=""
                            />

                            <TextInput
                                label="Project Manager"
                                id="projectManager"
                                type="text"
                                name="projectManager"
                                placeholder="Enter phone"
                                value={input.projectManager}
                                handleValue={handleInputChange}
                            />
                        </div>

                        {/* buttons */}
                        <div className="buttonControl">
                            <button type="button" className="btn" onClick={() => navigate(-1)}>
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="btn btn-icon btn-primary"
                                disabled={isLoading}
                            >
                                {isLoading && <FaSpinner size={14} />}Submit
                            </button>
                        </div>
                    </form>
                </FormContainer>
            </div>
        </div>
    )
}

export default ProjectUpdate
