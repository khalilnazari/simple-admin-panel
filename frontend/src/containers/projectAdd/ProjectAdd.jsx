import { useCallback, useState } from "react"
import {
    SelectInput,
    FormContainer,
    PageHeader,
    TextInput,
    Loading,
    AlertError,
    AlertSuccess
} from "../../components"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { createProject } from "../../api/projectApi"

const ProjectAdd = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // state
    const { isLoading, hasError, errorMessage, successMessage } = useSelector(
        (state) => state.projects
    )
    const { departments } = useSelector((state) => state.departments)
    const [input, setInput] = useState({
        projectName: "",
        projectId: "",
        clientName: "",
        clientEmail: "",
        projectManager: "",
        department: ""
    })
    const departmentsName = departments.map((dept) => dept.deptName)

    // handle input change
    const handleInputChange = useCallback(
        (e) => {
            setInput({ ...input, [e.target.name]: e.target.value })
        },
        [input]
    )
    const handleInputDeptChange = (e) => {
        const { _id: departmentId } = departments.find((dept) => dept.deptName === e.target.value)
        setInput({ ...input, [e.target.name]: departmentId })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        createProject(dispatch, input)
    }

    // jsx
    return (
        <div className="project">
            {isLoading && <Loading loadingMessage="Saving project..." />}

            {/* Page title */}
            <PageHeader title={`Add new project`} />

            {/* Alerts */}
            {hasError && <AlertError message={errorMessage} />}
            {successMessage && <AlertSuccess message={successMessage} />}

            {/* Page body */}
            <div className="formWrapper">
                <FormContainer>
                    <form onSubmit={handleSubmit}>
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
                                label="Project ID"
                                id="projectId"
                                type="text"
                                name="projectId"
                                placeholder="Enter project ID"
                                value={input.projectId}
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
                                value={input.department}
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
                            <button type="button" onClick={() => navigate(-1)}>
                                Cancel
                            </button>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </FormContainer>
            </div>
        </div>
    )
}

export default ProjectAdd
