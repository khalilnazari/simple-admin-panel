import React from "react"
import "./DatalistInput.scss"

const DatalistInput = ({ id, label, name, options }) => {
    console.log(options)
    return (
        <div className="datalistInput">
            <label htmlFor={id}>{label}</label>
            {/* <input type="text" id={id} name={name} list={id} /> */}
            <input list={name} name={name} />
            <datalist id={name}>
                {options.map((option) => (
                    <option key={option} value={option} />
                ))}
            </datalist>
        </div>
    )
}

export default DatalistInput
