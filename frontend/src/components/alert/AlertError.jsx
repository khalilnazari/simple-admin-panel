import React from "react"
import "./alert.scss"

const AlertError = ({ errorMessage }) => {
    return <div className="alertError">{errorMessage}</div>
}

export default AlertError
