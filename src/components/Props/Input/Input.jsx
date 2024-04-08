import React from 'react';

function Input(props) {
  const { text, autoComplete, name, className, placeholder, type, required, textarea } = props;

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
        />
      </>
    );
  }
}

export default Input;
