import React from "react"
import "./alert.scss"

const AlertError = ({ message }) => {
    return <div className="alertError">{message}</div>
}

const AlertSuccess = ({ message }) => {
    return <div className="alertSuccss">{message}</div>
}

export { AlertError, AlertSuccess }
