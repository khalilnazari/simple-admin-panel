import { useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Swal from "sweetalert2"
import { FaSpinner } from "react-icons/fa"
import { AlertError, FormContainer, Loading, PageHeader, TextInput } from "../../components"
import { updateDepartment } from "../../api/departmentApi"

const DepartmentUpdate = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()

    const { departments, hasError, errorMessage, isLoading } = useSelector(
        (state) => state.departments
    )
    const department = departments.find((dept) => dept?._id === params?.id)

    // state
    const [input, setInput] = useState({
        deptName: department.deptName || "",
        deptId: department.deptId || "",
        deptHead: department.deptHead || ""
    })

    const handleInputChange = useCallback(
        (e) => {
            setInput({ ...input, [e.target.name]: e.target.value })
        },
        [input]
    )

    // handle submit
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await updateDepartment(dispatch, input, params.id)

        if (response) {
            Swal.fire("Saved!", "Changes have been saved.", "success")
        } else {
            Swal.fire("Opps!", "An error occured, please try again.", "error")
        }
    }

    // jsx
    return (
        <div>
            {isLoading && <Loading loadingMessage="Saving changes..." />}

            {/* Page title */}
            <PageHeader title="New department" />

            {/* Error */}
            {hasError && <AlertError message={errorMessage} />}

            {/* Page body */}
            <div className="formWrapper">
                <FormContainer>
                    <form onSubmit={handleSubmit}>
                        <div className="inputContainer">
                            <TextInput
                                label="Dept name"
                                id="deptName"
                                type="text"
                                name="deptName"
                                placeholder="Enter dept name"
                                value={input.deptName}
                                handleValue={handleInputChange}
                                // required={true}
                            />

                            <TextInput
                                label="Dept ID"
                                id="deptId"
                                type="text"
                                name="deptId"
                                placeholder="Enter dept ID"
                                value={input.deptId}
                                handleValue={handleInputChange}
                                // required={true}
                            />

                            <TextInput
                                label="Dept Head"
                                id="deptHead"
                                type="text"
                                name="deptHead"
                                placeholder="Enter dept head"
                                value={input.deptHead}
                                handleValue={handleInputChange}
                            />
                        </div>

                        {/* buttons */}
                        <div className="buttonControl">
                            <button type="button" onClick={() => navigate(-1)}>
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

export default DepartmentUpdate
