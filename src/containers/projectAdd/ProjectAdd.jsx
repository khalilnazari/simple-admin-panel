import { useCallback, useState } from "react"
import { FormContainer, PageHeader, TextInput } from "../../components"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import { addProjectSuccess, addProjectFailure, addProjectStart } from "../../redux/projectSlice"
import { useDispatch } from "react-redux"

const ProjectAdd = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [input, setInput] = useState({
        projectName: "",
        clientName: "",
        phoneNumber: "",
        email: "",
        joinDate: ""
    })

    // handle input change
    const handleInputChange = useCallback(
        (e) => {
            setInput({ ...input, [e.target.name]: e.target.value })
        },
        [input]
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        input.id = Math.random().toString(16).slice(2)

        // start add
        dispatch(addProjectStart())

        // confirm alert
        Swal.fire({
            title: "Please confirm adding project!",
            text: "You can try again!",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, add user!"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(addProjectSuccess(input))

                // if added successfully
                if (true) {
                    Swal.fire("Saved!", "The project has been added.", "success")
                } else {
                    dispatch(addProjectFailure())
                    Swal.fire("Opps!", "An error occured, please try again.", "error")
                }
            }
        })
    }

    // jsx
    return (
        <div className="project">
            {/* Page title */}
            <PageHeader title={`Add new project`} />

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
                                label="Client"
                                id="clientName"
                                type="text"
                                name="clientName"
                                placeholder="Enter client name"
                                value={input.clientName}
                                handleValue={handleInputChange}
                            />

                            <TextInput
                                label="Email"
                                id="email"
                                type="text"
                                name="email"
                                placeholder="Enter client email"
                                value={input.email}
                                handleValue={handleInputChange}
                            />

                            <TextInput
                                label="Phone number"
                                id="phone"
                                type="text"
                                name="phoneNumber"
                                placeholder="Enter phone"
                                value={input.phoneNumber}
                                handleValue={handleInputChange}
                            />
                            <TextInput
                                label="Join date"
                                id="joindate"
                                type="date"
                                name="joinDate"
                                value={input.joinDate}
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
