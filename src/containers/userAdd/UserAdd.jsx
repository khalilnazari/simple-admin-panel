import { useCallback, useState } from "react"
import { FormContainer, PageHeader, TextInput } from "../../components"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

const UserAdd = () => {
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

        Swal.fire({
            title: "Confirm new user!",
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire("User added successfuly!", "", "success")
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info")
            }
        })
        console.log(input)
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
                                id="phone"
                                type="text"
                                name="phone"
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
