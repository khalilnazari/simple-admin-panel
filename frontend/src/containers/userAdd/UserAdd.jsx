import { useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import { FormContainer, PageHeader, TextInput } from "../../components"
import { createUser } from "../../api/api"

const UserAdd = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { hasError, errorMessage, isLoading } = useSelector((state) => state.users)

    const [input, setInput] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        password: ""
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

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await createUser(dispatch, input)
        if (response) {
            Swal.fire("Saved!", "The user has been added.", "success")
        } else {
            Swal.fire("Opps!", "An error occured, please try again.", "error")
        }
    }

    // jsx
    return (
        <div className="user">
            {/* Page title */}
            <PageHeader title={`Add new user`} />

            {hasError && (
                <p style={{ color: "red", background: "#ffe6e6", padding: "10px" }}>
                    {errorMessage}
                </p>
            )}

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
                            <TextInput
                                label="Password"
                                id="password"
                                type="text"
                                name="password"
                                placeholder="Enter password"
                                value={input.password}
                                handleValue={handleInputChange}
                            />
                        </div>

                        {/* buttons */}
                        <div className="buttonControl">
                            <button type="button" onClick={() => navigate(-1)}>
                                Cancel
                            </button>
                            <button type="submit" disabled={!canSave}>
                                {isLoading && <span>Loading...</span>}Submit
                            </button>
                        </div>
                    </form>
                </FormContainer>
            </div>
        </div>
    )
}

export default UserAdd
