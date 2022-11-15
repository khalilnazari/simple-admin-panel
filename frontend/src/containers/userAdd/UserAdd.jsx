import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import { FormContainer, PageHeader, SelectInput, TextInput } from "../../components"
import { createUser } from "../../api/userApi"

const UserAdd = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { hasError, errorMessage, isLoading } = useSelector((state) => state.users)
    const { roles } = useSelector((state) => state.roles)
    const rolesName = roles.map((role) => role.name)

    const { departments } = useSelector((state) => state.departments)
    const departmentsName = departments.map((dept) => dept.deptName)

    const [deptName, setDeptName] = useState("")
    const [role, setRole] = useState("")
    const [input, setInput] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        password: "",
        department: {}
    })

    const handleInputChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleDeptChange = (e) => {
        const { _id: id, deptName: name } = departments.find(
            (dept) => dept.deptName === e.target.value
        )
        setInput({ ...input, [e.target.name]: { id, name } })
        setDeptName(e.target.value)
    }

    const handleRoletChange = (e) => {
        const { id, name } = roles.find((role) => role.name === e.target.value)
        setInput({ ...input, [e.target.name]: { id, name } })
        setRole(e.target.value)
    }

    console.log(input)

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

                            {/* department */}
                            <SelectInput
                                label="Department"
                                id="department"
                                name="department"
                                value={deptName}
                                options={departmentsName}
                                handleValue={handleDeptChange}
                                errorMessage=""
                            />

                            {/* role */}
                            <SelectInput
                                label="Role"
                                id="role"
                                name="role"
                                value={role}
                                options={rolesName}
                                handleValue={handleRoletChange}
                                errorMessage=""
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
