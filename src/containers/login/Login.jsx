import React from "react"
import "./Login.scss"
import { Link } from "react-router-dom"
import { useState } from "react"
import { TextInput } from "../../components"

const Login = () => {
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
                        <h1>User Login</h1>
                    </div>
                    <TextInput
                        type="text"
                        id="username"
                        name="username"
                        label="Username"
                        placeholder="Enter your username"
                        value={input.username}
                        handleValue={handleChange}
                    />

                    <TextInput
                        type="password"
                        id="password"
                        name="password"
                        label="Password"
                        placeholder="Enter your passowrd"
                        value={input.password}
                        handleValue={handleChange}
                    />
                    <div className="inputControl">
                        <button type="submit">Login</button>
                    </div>

                    <div className="inputControl">
                        <Link to="/forgetpassword" className="forgetPassword">
                            Forgot password?
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
