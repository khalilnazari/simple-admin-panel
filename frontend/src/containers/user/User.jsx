import { useCallback, useState } from "react"
import { FormContainer, PageHeader, TextInput } from "../../components"
import "./User.scss"
import Swal from "sweetalert2"
import { useLocation, useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import {
    updateUserFailure,
    updateUserStart,
    updateUserSuccess,
    deleteUserFailure,
    deleteUserStart,
    deleteUserSuccess
} from "../../redux/userSlice"
import { useEffect } from "react"
import { getUser } from "../../api/userApi"

const User = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const userState = location?.state?.item

    // state
    const [user, setUser] = useState(userState)
    const [editInput, setEditInput] = useState(true)
    const { id } = useParams()

    const fetchUser = async () => {
        const user = await getUser(id)
        setUser(user)
    }

    useEffect(() => {
        if (!user) {
            fetchUser()
        }
    })

    console.log(user)

    // handle edit form
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

    // Delete User
    const handleDeleteUser = () => {
        dispatch(deleteUserStart)

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
                dispatch(deleteUserSuccess(user.id))
                if (false) {
                    Swal.fire("Deleted!", "User has been deleted.", "success")
                } else {
                    dispatch(deleteUserFailure)
                    Swal.fire("Opps!", "An error has been occured. Try again.", "error")
                }
            }
        })
    }

    // jsx
    return (
        <div className="user">
            {/* Page title */}
            <PageHeader
                title={`User Detail`}
                editButtonText="Update User"
                handleEditForm={handleEditForm}
            />

            {/* Page body */}
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
                                    onClick={() => handleDeleteUser()}
                                >
                                    Delete User
                                </button>
                            </div>
                        )}
                    </form>
                </FormContainer>
            </div>
        </div>
    )
}

export default User
