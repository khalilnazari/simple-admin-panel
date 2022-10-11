import { memo } from "react"

const TextInput = ({ label, id, type, name, placeholder, value, handleValue }) => {
    return (
        <div className="input-control">
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={handleValue}
                value={value}
            />
        </div>
    )
}

export default memo(TextInput)
