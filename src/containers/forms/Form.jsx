import { useCallback, useState } from "react"
import { SelectInput, TextInput } from "../../components"
import "./Form.scss"

const ReusableFormElement = () => {
    const [input, setInput] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        country: ""
    })

    const handleInputChange = useCallback(
        (e) => {
            setInput({ ...input, [e.target.name]: e.target.value })
        },
        [input]
    )

    const canSave = Object.values(input).every(Boolean)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)
    }

    // jsx
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextInput
                    label="First Name"
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder="Enter your first name"
                    handleValue={handleInputChange}
                    value={input.firstname}
                />

                <TextInput
                    label="Last Name"
                    id="lastname"
                    type="text"
                    name="lastname"
                    placeholder="Enter your last name"
                    value={input.lastname}
                    handleValue={handleInputChange}
                />

                <TextInput
                    label="Phone number"
                    id="phone"
                    type="text"
                    name="phone"
                    placeholder="Enter your phone number"
                    handleValue={handleInputChange}
                    value={input.phone}
                />

                <SelectInput
                    options={["option1", "option2", "option3"]}
                    handleValue={handleInputChange}
                    value={input.phone}
                    label="country"
                    id="country"
                    name="country"
                />

                <div className="button-control">
                    <button type="submit" disabled={!canSave}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ReusableFormElement
