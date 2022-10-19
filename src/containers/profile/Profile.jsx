import { useCallback, useState } from "react"
import { FormContainer, PageHeader, TextInput } from "../../components"
import "./Profile.scss"
import Swal from "sweetalert2"
import { useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"
import { updateUserFailure, updateUserStart, updateUserSuccess } from "../../redux/userSlice"

const Profile = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const user = location.state?.item
    const [editInput, setEditInput] = useState(true)

    const handleEditForm = () => setEditInput((prev) => !prev)

    const [input, setInput] = useState({
        firstName: user?.firstName || "",
        lastName: user?.lastName || "",
        phoneNumber: user?.phoneNumber || "",
        email: user?.email || ""
    })

    const handleInputChange = useCallback(
        (e) => {
            setInput({ ...input, [e.target.name]: e.target.value })
        },
        [input]
    )

    // handle Submit form
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateUserStart())
        Swal.fire({
            title: "Do you want to save the changes?",
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                dispatch(updateUserSuccess({ data: input, id: user.id }))
                if (true) {
                    Swal.fire("Saved!", "Changes has been saved.", "success")
                } else {
                    dispatch(updateUserFailure())
                    Swal.fire("Oppos!", "An error ocurred, please try again.", "error")
                }
            }
        })
    }

    // jsx
    return (
        <div className="profile">
            {/* Page title */}
            <PageHeader
                title={`User Detail`}
                editButtonText="Update Profile"
                handleEditForm={handleEditForm}
            />

            {/* Page body */}
            <div className="title">Personal Information</div>

            <div className="formWrapper">
                <FormContainer>
                    <form onSubmit={handleSubmit}>
                        <div className="inputContainer">
                            <TextInput
                                label="First name"
                                id="firstName"
                                type="text"
                                name="firstName"
                                placeholder="Enter first name"
                                value={input.firstName}
                                handleValue={handleInputChange}
                                editInput={editInput}
                            />

                            <TextInput
                                label="Last name"
                                id="lastName"
                                type="text"
                                name="lastName"
                                placeholder="Enter last name"
                                value={input.lastName}
                                handleValue={handleInputChange}
                                editInput={editInput}
                            />

                            <TextInput
                                label="Email"
                                id="email"
                                type="text"
                                name="email"
                                placeholder="Enter email"
                                value={input.email}
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
                        {!editInput && (
                            <div className="buttonControl">
                                <button
                                    type="button"
                                    className="btn"
                                    onClick={() => setEditInput((prev) => !prev)}
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                        )}
                    </form>
                </FormContainer>
            </div>

            {/* Employment information */}
            <div className="employmentInfor">
                <div className="title">Employment Information</div>
                <div className="infoItems">
                    <div className="infoItem">
                        <p>Join date : </p>
                        <span>12-12-2022</span>
                    </div>

                    <div className="infoItem">
                        <p>End date : </p>
                        <span>12-12-2024</span>
                    </div>

                    <div className="infoItem">
                        <p>Status : </p>
                        <span>Active</span>
                    </div>

                    <div className="infoItem">
                        <p>Agreement Docs : </p>
                        <span>agreedment-letter.pdf</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
