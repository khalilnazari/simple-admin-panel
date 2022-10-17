import { useCallback, useState } from "react"
import { FormContainer, PageHeader, TextInput } from "../../components"
import "./User.scss"

const User = () => {
    const [editInput, setEditInput] = useState(true)
    const handleEditForm = () => setEditInput((prev) => !prev)

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
        console.log(input)
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
                        {!editInput && (
                            <div className="buttonControl">
                                <button type="button" onClick={() => setEditInput((prev) => !prev)}>
                                    Cancel
                                </button>
                                <button type="submit" disabled={!canSave}>
                                    Submit
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
