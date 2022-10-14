import { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"
import { PageTitle, SelectInput, TextInput } from "../../components"
import "./Form.scss"

const ReusableFormElement = () => {
    const navigate = useNavigate()

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

    // required inputs
    const { phone, country, ...requiredInput } = input
    const canSave = Object.values(requiredInput).every(Boolean)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)
    }

    // jsx
    return (
        <div className="formPage">
            <PageTitle title="User Registeration Form" />
            <div className="formWrapper">
                <form onSubmit={handleSubmit}>
                    <div className="col-2">
                        <TextInput
                            label="Input 11"
                            id="input11"
                            type="text"
                            name="input11"
                            placeholder="Enter text"
                            value={input.lastname}
                            handleValue={handleInputChange}
                        />

                        <TextInput
                            label="Input 22"
                            id="input22"
                            type="text"
                            name="input22"
                            placeholder="Enter text"
                            value={input.lastname}
                            handleValue={handleInputChange}
                        />
                    </div>

                    <div className="col-3">
                        <TextInput
                            label="Input 1"
                            id="input1"
                            type="text"
                            name="input1"
                            placeholder="Enter text"
                            value={input.lastname}
                            handleValue={handleInputChange}
                        />

                        <TextInput
                            label="Input 2"
                            id="input2"
                            type="text"
                            name="input2"
                            placeholder="Enter text"
                            value={input.lastname}
                            handleValue={handleInputChange}
                        />

                        <TextInput
                            label="Input 3"
                            id="input3"
                            type="text"
                            name="input3"
                            placeholder="Enter text"
                            value={input.lastname}
                            handleValue={handleInputChange}
                        />
                    </div>

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
                        value={input.country}
                        label="country"
                        id="country"
                        name="country"
                    />

                    <div className="buttonControl">
                        <button type="button" onClick={() => navigate(-1)}>
                            Cancel
                        </button>
                        <button type="submit" disabled={!canSave}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ReusableFormElement
