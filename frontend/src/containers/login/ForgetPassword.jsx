import React from "react"
import "./Login.scss"
import { Link } from "react-router-dom"
import { useState } from "react"
import { TextInput } from "../../components"

const ForgetPasswrod = () => {
    // state
    const [input, setInput] = useState({
        password: "",
        username: ""
    })

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    // handleFormSubmit
    const handleFormSubmit = (e) => {
        e.preventDefault()

        console.log(input)
    }

    // jsx
    return (
        <div className="login">
            <div className="formWrapper">
                <form onSubmit={handleFormSubmit}>
                    <div className="inputControl">
                        <h1>Forgot password</h1>
                    </div>
                    <TextInput
                        type="email"
                        id="username"
                        name="username"
                        label="Enter your email"
                        placeholder="Enter your email"
                        value={input.username}
                        handleValue={handleChange}
                    />

                    <TextInput
                        type="password"
                        id="password"
                        name="password"
                        label="Enter the code sent to your email"
                        placeholder="Enter the code"
                        value={input.password}
                        handleValue={handleChange}
                    />
                    <div className="inputControl">
                        <button type="submit">Submit</button>
                    </div>

                    <div className="inputControl">
                        <Link to="/" className="forgetPassword">
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgetPasswrod
