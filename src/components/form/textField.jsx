import React from "react";

export const TextField = ({
  label,
  placeholder,
  className,
  fieldClassName,
  labelClassName,
  name,
  value,
  pattern,
  handler,
  type = 'text',
  disabled = false,
  required = false,
}) => (
  <div className={className}>
    {label && <label className={labelClassName}>{label}</label>}
    <input
      className={fieldClassName}
      placeholder={placeholder}
      pattern={pattern}
      type={type}
      required={required}
      name={name}
      value={value}
      onChange={handler}
      disabled={disabled}
    />
  </div>
);

export default TextField;
