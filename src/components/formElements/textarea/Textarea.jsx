import React from "react"
import "./Textarea.scss"

const Textarea = ({ label, id, name, placeholder, handleValue, value, setRef }) => {
    return (
        <div className="textareaInput">
            <label htmlFor={id}>{label}</label>
            <textarea
                ref={setRef}
                value={value}
                name={name}
                id={id}
                rows="8"
                placeholder={placeholder}
                onChange={handleValue}
            ></textarea>
        </div>
    )
}

export default Textarea
