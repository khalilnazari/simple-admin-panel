import { memo } from "react"
import "./TextInput.scss"

const TextInput = ({
    label,
    id,
    type,
    name,
    placeholder,
    value,
    handleValue,
    errorMessage,
    editInput
}) => {
    return (
        <div className="textInput">
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={handleValue}
                value={value}
                style={{ border: errorMessage ? "1px solid red" : "" }}
                className={editInput ? "editInput" : ""}
                disabled={editInput}
                autoComplete="false"
            />
            {errorMessage && <small>{errorMessage} </small>}
        </div>
    )
}

export default memo(TextInput)
