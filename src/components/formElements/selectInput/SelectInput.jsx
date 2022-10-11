const SelectInput = ({ label, id, name, value, handleValue, options }) => {
    return (
        <div className="input-control">
            <label htmlFor={id}>{label}</label>
            <select name={name} onChange={handleValue} value={value}>
                {options.map((option, key) => (
                    <option value="" key={key}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default SelectInput
