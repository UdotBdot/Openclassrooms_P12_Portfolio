import React from 'react';

function Input(props) {
  const { text, autoComplete, name, className, placeholder, type, required, textarea, disabled} = props;

  if (textarea) {
    return (
      <>
        <label htmlFor={name}>{name}</label>
        <textarea
          autoComplete={autoComplete}
          id={name}
          name={name}
          className={className}
          placeholder={placeholder}
          required={required}
         disabled={disabled}
        >
        </textarea>
      </>
    );
  } else {
    return (
      <>
        <label htmlFor={name}>{text}</label>
        <input
          autoComplete={autoComplete}
          id={name}
          name={name}
          className={className}
          placeholder={placeholder}
          type={type}
          required={required}
          disabled={disabled}
        />
      </>
    );
  }
}

export default Input;
