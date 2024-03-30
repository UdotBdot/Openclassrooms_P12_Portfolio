import React from 'react';

function Input(props) {
  const { text, autoComplete, name, className, placeholder, type, tabIndex, required, textarea } = props;

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
          tabIndex={tabIndex}
          required={required}
        />
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
          tabIndex={tabIndex}
          required={required}
        />
      </>
    );
  }
}

export default Input;
