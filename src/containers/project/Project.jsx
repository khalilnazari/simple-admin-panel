import { useCallback, useState } from "react"
import { FormContainer, PageHeader, TextInput } from "../../components"

import Swal from "sweetalert2"
import { useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"
import {
    updateProjectFailure,
    updateProjectStart,
    updateProjectSuccess,
    deleteProjectFailure,
    deleteProjectStart,
    deleteProjectSuccess
} from "../../redux/projectSlice"

const Project = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const project = location.state?.item

    const [editInput, setEditInput] = useState(true)

    const handleEditForm = () => setEditInput((prev) => !prev)

    const [input, setInput] = useState({
        firstName: project.firstName || "",
        lastName: project.lastName || "",
        phoneNumber: project.phoneNumber || "",
        email: project.email || ""
    })

    const handleInputChange = useCallback(
        (e) => {
            setInput({ ...input, [e.target.name]: e.target.value })
        },
        [input]
    )

    // update project
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateProjectStart())
        Swal.fire({
            title: "Do you want to save the changes?",
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                dispatch(updateProjectSuccess({ data: input, id: project.id }))
                if (true) {
                    Swal.fire("Saved!", "Changes has been saved.", "success")
                } else {
                    dispatch(updateProjectFailure())
                    Swal.fire("Oppos!", "An error ocurred, please try again.", "error")
                }
            }
        })
    }

    // Delete Project
    const handleDeleteProject = () => {
        dispatch(deleteProjectStart)

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
                dispatch(deleteProjectSuccess(project.id))
                if (false) {
                    Swal.fire("Deleted!", "Project has been deleted.", "success")
                } else {
                    dispatch(deleteProjectFailure)
                    Swal.fire("Opps!", "An error has been occured. Try again.", "error")
                }
            }
        })
    }

    // jsx
    return (
        <div className="project">
            {/* Page title */}
            <PageHeader
                title="Project Details"
                editButtonText="Update details"
                handleEditForm={handleEditForm}
            />

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
                                editInput={editInput}
                            />

                            <TextInput
                                label="Client"
                                id="clientName"
                                type="text"
                                name="clientName"
                                placeholder="Enter client name"
                                value={input.clientName}
                                handleValue={handleInputChange}
                                editInput={editInput}
                            />

                            <TextInput
                                label="Email"
                                id="email"
                                type="text"
                                name="email"
                                placeholder="Enter client email"
                                value={input.clientEmail}
                                handleValue={handleInputChange}
                                editInput={editInput}
                            />

                            <TextInput
                                label="Phone number"
                                id="phone"
                                type="text"
                                name="phone"
                                placeholder="Enter phone"
                                value={input.phoneNumber}
                                handleValue={handleInputChange}
                                editInput={editInput}
                            />
                        </div>

                        {/* buttons */}
                        {!editInput ? (
                            <div className="buttonControl">
                                <button
                                    type="button"
                                    className="btn"
                                    onClick={() => setEditInput((prev) => !prev)}
                                >
                                    Cancel
                                </button>
                                <button type="submit">Submit</button>
                            </div>
                        ) : (
                            <div className="buttonControl">
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => handleDeleteProject()}
                                >
                                    Delete Project
                                </button>
                            </div>
                        )}
                    </form>
                </FormContainer>
            </div>
        </div>
    )
}

export default Project
