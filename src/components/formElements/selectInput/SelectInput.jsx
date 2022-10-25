import "./SelectInput.scss"

const SelectInput = ({ label, id, name, value, handleValue, options, errorMessage }) => {
    return (
        <div className="selectInput">
            <label htmlFor={id}>{label}</label>
            <select name={name} onChange={handleValue} value={value} id={id}>
                <option value="">Choose - {label}</option>
                {options.map((option, key) => (
                    <option value={option} key={key}>
                        {option}
                    </option>
                ))}
            </select>
            {errorMessage && <small>{errorMessage}</small>}
        </div>
    )
}

export default SelectInput
