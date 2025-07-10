function InputField({ id, label, type = "text", value, onChange, disabled = false, className = "" }) {
    return (
        <div className={`input-wrapper ${className}`}>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
        </div>
    )
}
export default InputField