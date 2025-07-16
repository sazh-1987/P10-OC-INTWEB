function InputField({ id, label, type = "text", value, onChange, disabled = false, className = "", autoComplete }) {
    return (
        <div className={`input-wrapper ${className}`}>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                autoComplete={autoComplete}
                disabled={disabled}
            />
        </div>
    )
}
export default InputField