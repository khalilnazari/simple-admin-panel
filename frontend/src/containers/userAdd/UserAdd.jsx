import { useCallback, useState } from "react"
import { FormContainer, PageHeader, TextInput } from "../../components"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import { addUserSuccess, addUserFailure, addUserStart } from "../../redux/userSlice"
import { useDispatch } from "react-redux"

const UserAdd = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [input, setInput] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: ""
    })

    const handleInputChange = useCallback(
        (e) => {
            setInput({ ...input, [e.target.name]: e.target.value })
        },
        [input]
    )

    // required inputs
    const { firstName, lastName } = input
    const canSave = Object.values(firstName, lastName).every(Boolean)

    const handleSubmit = (e) => {
        e.preventDefault()
        input.id = Math.random().toString(16).slice(2)
        dispatch(addUserStart())

        Swal.fire({
            title: "Please confirm adding user!",
            text: "You can try again!",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, add user!"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(addUserSuccess(input))

                if (true) {
                    Swal.fire("Saved!", "The user has been added.", "success")
                } else {
                    dispatch(addUserFailure())
                    Swal.fire("Opps!", "An error occured, please try again.", "error")
                }
            }
        })
    }

    // jsx
    return (
        <div className="user">
            {/* Page title */}
            <PageHeader title={`Add new user`} />

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
                            />

                            <TextInput
                                label="Last name"
                                id="lastName"
                                type="text"
                                name="lastName"
                                placeholder="Enter last name"
                                value={input.lastName}
                                handleValue={handleInputChange}
                            />

                            <TextInput
                                label="Email"
                                id="email"
                                type="text"
                                name="email"
                                placeholder="Enter email"
                                value={input.email}
                                handleValue={handleInputChange}
                            />

                            <TextInput
                                label="Phone number"
                                id="phoneNumber"
                                type="text"
                                name="phoneNumber"
                                placeholder="Enter phone"
                                value={input.phoneNumber}
                                handleValue={handleInputChange}
                            />
                        </div>

                        {/* buttons */}
                        <div className="buttonControl">
                            <button type="button" onClick={() => navigate(-1)}>
                                Cancel
                            </button>
                            <button type="submit" disabled={!canSave}>
                                Submit
                            </button>
                        </div>
                    </form>
                </FormContainer>
            </div>
        </div>
    )
}

export default UserAdd
